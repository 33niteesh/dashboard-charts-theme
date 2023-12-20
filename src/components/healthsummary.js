import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import {useState} from 'react'
export default function Healthfun(props){
    return(
    <div className="sub-1">
        <top className="sub-head"><p className="sub-heading">Health Summary <k style={{fontSize:20,color:'grey'}}>show : </k><k className="this">This month ↓</k></p><div style={{fontSize:'x-large',display: 'flex',flexDirection:'row',width:'30%',alignItems:'center'}}><b>View Reports</b> <ArrowCircleRightOutlinedIcon style={{height:'60%',width:'30%',color:'blue'}}/></div></top>
        <bottom style={{display:'flex',flexDirection:'row',justifyContent: 'space-between'}}>
            <div style={{height:300,width:300,display:'flex',flexDirection:'column',padding:5,justifyContent: 'center',alignItems: 'center'}}>
                    <p style={{fontSize:20,fontWeight:'bold'}}>Security Score</p>
                    <div className="one-back">
                        <diV className="one-mid" style={{backgroundColor:props.theme ? 'white':'#1f1f1f',color: props.theme ? 'black':'white'}}>
                                900
                                <br>
                                </br>
                                Exellent
                        </diV>
                    </div>
            </div>
            <div style={{height:300,width:300,display:'flex',flexDirection:'column',padding:5,justifyContent: 'center',alignItems: 'center'}}>
                    <p style={{fontSize:20}}>web 2.0 Domain</p>
                    <div className="one-back-2">
                        <diV className="one-mid-2" style={{backgroundColor:props.theme ? 'white':'#1f1f1f',color: props.theme ? 'black':'white'}}>
                                100%
                                <br>
                                </br>
                                safe
                        </diV>
                    </div>
            </div>
            <div style={{height:300,width:300,display:'flex',flexDirection:'column',padding:5,justifyContent: 'center',alignItems: 'center'}}>
                    <p style={{fontSize:20}}>web 3.0 Domain</p>
                    <div className="one-back-3">
                        <diV className="one-mid-3" style={{backgroundColor:props.theme ? 'white':'#1f1f1f',color: props.theme ? 'black':'white'}}>
                        100%
                                <br>
                                </br>
                                safe
                        </diV>
                    </div>
            </div>
            <div style={{height:300,width:300,display:'flex',flexDirection:'column',padding:5,justifyContent: 'center',alignItems: 'center'}}>
                    <p style={{fontSize:20}}>Social Accounts</p>
                    <div className="one-back-4">
                        <diV className="one-mid-4" style={{backgroundColor:props.theme ? 'white':'#1f1f1f',color: props.theme ? 'black':'white'}}>
                        100%
                                <br>
                                </br>
                                safe
                        </diV>
                    </div>
            </div>
        </bottom>
    </div>
    )
}