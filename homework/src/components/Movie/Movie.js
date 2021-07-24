import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions';

import './Movie.css';

class Movie extends React.Component {
    componentDidMount(){
        const movieId = this.props.match.params.id;
        this.props.getDetail(movieId)
    }
    render() {
        return (
            

            <div className="movie-detail">
                Detalle de la Pelicula
            </div>
        
        );
    }
}

function mapStateToProps(state){
    return{
        movie: state.movieDetail
    }
}

function mapDispatchToProps(dispatch){
    return{
        getDetail: idMovie => dispatch(getMovieDetail(idMovie))
    }

}

export default connect(mapDispatchToProps, mapStateToProps) (Movie);