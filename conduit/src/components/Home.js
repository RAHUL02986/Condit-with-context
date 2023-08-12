import React from "react";
import withData from "./withData";
import '../style/home.scss'
import Loader from "./Loader";

 function Home(props){
    if(!props.data){
        return <Loader/>
    }
    return(
        <div>
            <ul>
          {
            props.data.articles.map((article)=>{
                return(
                    <li >
                        <article>
                            <header className="flex">                            <div className="flex-2">
                                <img src={article.author.image} alt={article.author.name} style={{
                                    borderRadius:"50%",
                                    height:"50px",
                                    width:"50px"
                                }}/>
                                <div >
                                <h3 style={{
                                    color:"#5eba73"
                                }}>{article.author.username}</h3>
                                <p style={{color:'grey' }}>sat Aug 12 2023</p>
                                </div>
                            </div>
                            <button style={{
                                color:"#5eba73",
                                border:"1px solid #5eba73",
                                borderRadius:"5px"
                            }}>💚 {article.favoritesCount}</button>
                            </header>
                            <h3 className="slug">{article.slug}</h3>
                            <h4>{article.description.substring(0,100)+"..."}</h4>
                            <div className="flex">
                            <button style={{
                                color:'grey',
                                border:"none",
                                background: "rgb(215, 250, 215)",

                            }}>Read more</button>
                            {
                        article.tagList.map((tag)=>{
                            return (
                                <div>

                                <button style={{
                                    border:'1px solid grey',
                                    color:"grey",
                                    background: "rgb(215, 250, 215)",
                                    borderRadius:'10px',
                                    margin:"0"

                                }}>{tag}</button>
                                                        </div>

                            )
                        })
                      }

                            </div>
                        </article>
                        <hr style={{
                            margin:'50px 0'
                        }}/>

                    </li>

                )
            })
          }
</ul>
        </div>
    )
}
export default withData(Home,'https://api.realworld.io/api/articles' )