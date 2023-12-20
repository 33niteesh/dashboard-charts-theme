import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
export default function Web3(props) {
    const series = [{ day: "Mon", val: 44 }, { day: "tue", val: 55 }, { day: "wed", val: 41 }, { day: "thu", val: 17 }, { day: "fri", val: 15 }]
    const series2 = [{ day: "Mon", val: 12 }, { day: "tue", val: 55 }, { day: "wed", val: 32 }, { day: "thu", val: 17 }, { day: "fri", val: 15 }, { day: "sat", val: 0 }, { day: "sun", val: 90 }]
    const series3 = [{ day: "Mon", val: 44 }, { day: "tue", val: 12 }, { day: "wed", val: 0 }, { day: "thu", val: 17 }]
    const series4 = [{ day: "Mon", val: 12 }, { day: "tue", val: 55 }, { day: "wed", val: 33 }, { day: "thu", val: 0 }, { day: "fri", val: 15 }, { day: "Sat", val: 0 }]

    return (
        <div className="sub-2">
            <top className="sub-head"><p className="sub-heading">Web 3.0 Domains<k style={{ fontSize: 20, color: 'grey' }}> show : </k><k className="this">This month ↓</k></p><div style={{fontSize:'x-large',display: 'flex',flexDirection:'row',width:'30%',alignItems:'center'}}><b>Manage web 3.0</b> <ArrowCircleRightOutlinedIcon style={{height:'60%',width:'30%',color:'blue'}}/></div></top>
            <bottom style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <left style={{ height: 600 }}>
                <div style={{ height: 600, width: 300, display: 'flex', flexDirection: 'column', padding: 5, justifyContent: 'start',marginLeft:'3rem', alignItems: 'start' }}>
                        <p style={{ fontSize: 20, fontWeight: 'bold' }}>web 3.0 summary</p>
                        <br>
                        </br>
                        <div class="pie" style={{
                            backgroundImage: 'conic-gradient(rgb(82, 82, 247) 64%, rgb(64, 64, 177) 64%, rgb(122, 222, 76) 81%, rgb(82, 82, 247) 81%)'
                        }}>
                            <div style={{ width: '5rem', height: '5rem', borderRadius: '20rem',backgroundColor:props.theme ? 'white':'#1f1f1f',color: props.theme ? 'black':'white'}}></div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column',marginTop:'2rem',height:180,justifyContent:'space-between'}}>
                            <div style={{display: 'flex', flexDirection: 'row',justifyContent:'start',width:'7rem',alignItems:'start'}}><div style={{width: '1rem', height: '1rem', borderRadius: '20rem', backgroundColor: 'rgb(255, 68, 0)'}}></div><b style={{marginLeft:'1rem'}}>Looks like</b></div>
                            <div style={{display: 'flex', flexDirection: 'row',justifyContent:'start',width:'7rem',alignItems:'start'}}><div style={{width: '1rem', height: '1rem', borderRadius: '20rem', backgroundColor: 'rgb(82, 82, 247)'}}></div><b style={{marginLeft:'1rem'}}>Total </b></div>
                            <div style={{display: 'flex', flexDirection: 'row',justifyContent:'start',width:'7rem',alignItems:'start'}}><div style={{width: '1rem', height: '1rem', borderRadius: '20rem', backgroundColor: 'rgb(64, 64, 177)'}}></div><b style={{marginLeft:'1rem'}}>Redirect</b></div>
                            <div style={{display: 'flex', flexDirection: 'row',justifyContent:'start',width:'7rem',alignItems:'start'}}><div style={{width: '1rem', height: '1rem', borderRadius: '20rem', backgroundColor: 'rgb(122, 222, 76)'}}></div><b style={{marginLeft:'1rem'}}>Threats</b></div>

                        </div>
                    </div>
                </left>
                <right style={{ border: '1px solid rgb(0,0,0,0.2)', borderRadius: '1rem', height: 750, width: 1000, padding: '1rem' }}>
                    <div className="right-up">
                        <div className="chart-1">
                            <p> look alike</p>
                            <br />
                            <b style={{ fontSize: 20, marginLeft: '1rem' }}>{series.length}</b>
                            <div className="inner-chart">
                                {
                                    series.map((i, r) => {
                                        return (
                                            <>
                                                <div className="outer-div">
                                                    <div className="inner-div" style={{ height: i.val }}>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <div className="day" style={{ display: 'flex', flexDirection: 'coloumn', width: '100%', justifyContent: 'space-between' }}>
                                {

                                    series.map((i, r) => {
                                        return (<div>{i.day}</div>)
                                    })
                                }
                            </div>
                        </div>
                        <div className="chart-1">
                            <p>Total Enchrochments</p>
                            <br />
                            <b style={{ fontSize: 20, marginLeft: '1rem' }}>{series2.length}</b>
                            <div className="inner-chart">
                                {
                                    series2.map((i, r) => {
                                        return (
                                            <>
                                                <div className="outer-div-4">
                                                    <div className="inner-div-4" style={{ height: i.val }}>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <div className="day" style={{ display: 'flex', flexDirection: 'coloumn', width: '100%', justifyContent: 'space-between' }}>
                                {

                                    series2.map((i, r) => {
                                        return (<div>{i.day}</div>)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <div className="right-down" style={{marginTop: '20px'}}>
                        <div className="chart-1">
                            <p>Redirectors</p>
                            <br />
                            <b style={{ fontSize: 20, marginLeft: '1rem' }}>{series3.length}</b>
                            <div className="inner-chart">
                                {
                                    series3.map((i, r) => {
                                        return (
                                            <>
                                                <div className="outer-div-2">
                                                    <div className="inner-div-2" style={{ height: i.val }}>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }

                            </div>
                            <div className="day" style={{ display: 'flex', flexDirection: 'coloumn', width: '100%', justifyContent: 'space-between' }}>
                                {

                                    series3.map((i, r) => {
                                        return (<div>{i.day}</div>)
                                    })
                                }
                            </div>
                        </div>
                        <div className="chart-1">
                            <p style={{ margin: '1rem' }}> Resolved Threats</p>
                            <br />
                            <b style={{ fontSize: 20, marginLeft: '1rem' }}>{series4.length}</b>
                            <div className="inner-chart">
                                {
                                    series4.map((i, r) => {
                                        return (
                                            <>
                                                <div className="outer-div-3">
                                                    <div className="inner-div-3" style={{ height: i.val }}>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <div className="day" style={{ display: 'flex', flexDirection: 'coloumn', width: '100%', justifyContent: 'space-between' }}>
                                    {

                                        series4.map((i, r) => {
                                            return (<div>{i.day}</div>)
                                        })
                                    }
                                </div>
                        </div>
                    </div>
                </right>
            </bottom>
        </div>
    )
}