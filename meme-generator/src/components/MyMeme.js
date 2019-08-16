import React, {Component} from 'react';
import {connect} from 'react-redux';

class MyMeme extends Component{
    render()
    {
        return(
            <div>
                {
                    this.props.newMeme.map((meme,index) =>
                    {
                        return(
                                <img key={index} src ={meme.data.url} alt="meme-name" className='my-meme-img' />
                        )
                    })

                }
            </div>
        )
    }
}

function mapStateToProps(state)
{
   return {
      newMeme : state.newMeme
   }
}

export default connect(mapStateToProps, null)(MyMeme);