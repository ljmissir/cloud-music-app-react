import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import request from "../../services"
import { List, PullToRefresh, Toast } from "antd-mobile"
import * as utils from "../../utils/utils"
import "./index.scss"

function Songs(props) {
    let { search } = props.location
    const [songList, setSongList] = useState([])
    const [offset, setOffset] = useState(0)
    const [hasMore, setHasMore] = useState(true)
    const { id } = utils.getUrlParams(search)
    const { dispatch, song } = props

    // 查询歌曲url
    const querySong = async (curSong) => {
        if (!curSong) return
        const { id } = curSong
        dispatch({ type: "SET_PLAY_LIST", playList: songList, curSongId: id })
    }

    // 根据歌手id查询歌手歌曲
    const querySongList = async () => {
        if (!hasMore) {
            Toast.info("没有更多了")
            return
        }
        setOffset(offset + 25)
        const result = await request.querySongBySingerId({
            id,
            limit: 25,
            offset
        })
        setHasMore(result.more)
        setSongList([...songList, ...result.songs])
    }

    // 渲染歌曲
    const renderSongsList = (songList) => {
        return songList.map((song) => {
            return (
                <List.Item
                    className="singer-item"
                    arrow="horizontal"
                    key={song.id}
                    onClick={() => {
                        querySong(song)
                    }}
                >
                    <div className="info">
                        <p className="song-name">{song.name}</p>
                        <p className="singer-info">
                            <span className="singer-name">
                                {song.ar[0].name}
                            </span>
                            <span> - </span>
                            <span className="al-name">{song.al.name}</span>
                        </p>
                    </div>
                </List.Item>
            )
        })
    }

    useEffect(() => {
        querySongList()
    }, [])

    return (
        <div className="songs-wrapper">
            <PullToRefresh direction="up" onRefresh={querySongList}>
                <List className="song-list">
                    {!!songList.length && renderSongsList(songList)}
                </List>
            </PullToRefresh>
        </div>
    )
}

export default connect(({ song }) => ({ song }))(Songs)
