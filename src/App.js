import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css'

class App extends React.Component{
  state={
    isLoading:true,
    movies:[],
  }

  //https://ko.javascript.info/
  //https://ko.javascript.info/async-await
  getMovies = async () => {
    const{
      data:{
        data:{movies}
      }
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    // console.log(movies);
    this.setState({movies:movies, isLoading:false});
  }

  componentDidMount(){
    //영화 데이터 로딩이 완료 되면!
    /* setTimeout( ()=>{
      this.setState({isLoading:false});
    },6000 ); */

    // axios로 API 호출
    //axios.get('https://yts.mx/api/v2/list_movies.json');
    this.getMovies();
  }

  render(){
    const {isLoading,movies}=this.state;
    return(
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">'Loaging...'</span>
          </div>
          ):(
            <div class="movies">
              {movies.map (movie =>(
               <Movie 
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              ))}
            </div>
          )}
      </section>
    )
  }
}

export default App;