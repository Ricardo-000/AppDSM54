import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default class App extends Component {
constructor(props) {
super(props);

this.state = {
data: [],
isLoading: true
};
}

componentDidMount() {
fetch('https://jsonplaceholder.typicode.com/photos&#39')
.then((response) => response.json())
.then((json) => {
this.setState({ data: json });
})
.catch((error) => console.error(error))
.finally(() => {
this.setState({ isLoading: false });
});
}

render() {
const Item = ({ title }) => (
<View>
<Text>{title}</Text>
</View>
);

const { data, isLoading } = this.state;
const renderItem = ({ item }) => (
<Item title={item.title} />
);
return (
<View style={{ flex: 1, padding: 24 }}>
{isLoading ? <ActivityIndicator/> : (
<FlatList
data={data}
renderItem={renderItem}
keyExtractor={item => item.id}
/>
)}
</View>
);}};

