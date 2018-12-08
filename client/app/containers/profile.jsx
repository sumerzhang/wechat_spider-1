import React from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../actions';
import Loading from '../components/loading.jsx';
import Paper from 'material-ui/Paper';

class Profile extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { params, dispatch } = this.props;
    const { id } = params;
    dispatch(fetchProfile(id));
  }

  render() {
    const { isFetching, profile } = this.props;
    if (isFetching || !profile.data) return <Loading />;
    return (
      <Paper
        style={{
          padding: '30px',
          margin: '40px 20px'
        }}
      >
        <pre>
          {JSON.stringify(profile.data, null, 4)}
        </pre>
      </Paper>
    );
  }
}

export default connect(state => state)(Profile);
