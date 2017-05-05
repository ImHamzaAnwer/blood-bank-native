import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import { ListView } from 'react-native'
import ListItem from './ListItem';
import { connect } from 'react-redux';
import { donorsFetch } from '../store/actions';
import _ from 'lodash';
// import DonorDetail from './common/Modal';
class DonorsList extends Component {

    componentWillMount() {
        this.props.donorsFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ donors }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(donors)
    }

    renderRow(donor) {
        return <ListItem donor={donor} />;
    }
    
    render() {
        return (
            <Container>
                <Content>
                    <ListView
                        enableEmptySections
                        dataSource={this.dataSource}
                        renderRow={this.renderRow}
                    />
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const donors = _.map(state.donors, (val, uid) => {
        return { ...val, uid }
    })
    return { donors };
}

export default connect(mapStateToProps, { donorsFetch })(DonorsList);