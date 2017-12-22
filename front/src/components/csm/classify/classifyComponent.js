import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import AllShowComponent from '../allShow/allShowComponent.js'
// 数据库数据不足，自力更生
var arr=["果园优选","新鲜水果","水产海鲜","肉禽蛋类","乳品速食","时令鲜蔬","烘焙料理","粮油干货","酒水饮料","礼盒券卡","果园周边"];
class ClassifyComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type: "果园优选"
        };
    }
    change(event){
        this.setState({type:event.target.innerText});
        const left=document.getElementsByClassName('left')[0];
        const spans=left.getElementsByTagName('span');
        for(var i=0;i<spans.length;i++){
            spans[i].style.backgroundColor="#F5F5F5"; 
            spans[i].style.color="#3A3A3A";
            spans[i].style.borderLeft="none";
      }        
        const currentLi=event.target;
            currentLi.style.backgroundColor="#fff"; 
            currentLi.style.color="#65A032";
            currentLi.style.borderLeft="2px solid #65A032";    
    }
    render(){
        return (
                <div id="classify_container">
                    <div className="classify_top"></div>
                    <div className="classify_content">
                        <div className="left">
                            <ul >
                                {
                                arr.map(function(item,index){
                                        return <li key={index} onClick={this.change.bind(this)}><span>{item}</span></li>              
                                }.bind(this))
                                }                              
                            </ul>
                         </div>
                        <div className="right">
                        <AllShowComponent type={this.state.type} url="allshow.php"></AllShowComponent>
                        </div>
                    </div>
                    
                </div>
            )
    }
}
import './classify.scss'
export default ClassifyComponent