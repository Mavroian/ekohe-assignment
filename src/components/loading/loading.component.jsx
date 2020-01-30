import React from 'react';
import { connect } from 'react-redux'
import "./loading.styles.css"
import img from '../../assets/loading_spinner.gif'

const Loading = ({ loading }) => (

  loading ?
    <div className="loading">
      <h1>Using The Force</h1>
      <img src={img} alt='loading' />
    </div>
    : null
)

const mapStateToProps = ({ characters: { loading } }) => ({
  loading: loading
})


export default connect(mapStateToProps)(Loading);