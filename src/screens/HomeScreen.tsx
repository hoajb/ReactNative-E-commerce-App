// screens/HomeScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/fetchProductsActions';
import { RootState } from '../redux/states/rootState';
import { FetchProductsState } from '../redux/states/fetchProductsState';
import type { } from 'redux-thunk/extend-redux';
const HomeScreen = () => {
    const dispatch = useDispatch();
    const { products, loading, error }: FetchProductsState = useSelector((state: RootState) => {
        console.log(`State : ${state.productList.loading}`)
        return state.productList
    });

    const handleFetchProducts = () => {
        dispatch(fetchProducts());
    };

    // useEffect(() => {
    //     // Automatically fetch products when the component mounts
    //     dispatch(handleFetchProducts);
    // }, [dispatch]);

    // Define a function to render each product item
    const renderProductItem = ({ item }: { item: Product }) => (
        <View style={styles.productItem}>
            <Text>{item.title}</Text>
            <Text>${item.price}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text>Product List</Text>

            <Button title="Reload Products" onPress={handleFetchProducts} />

            {loading ? (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            ) : error ? (
                <Text>Error: {error}</Text>
            ) : (
                <View style={{ backgroundColor: 'white' }}>
                    <FlatList
                        data={products}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderProductItem}
                    />
                </View>
            )}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 16,
    },
    productItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    activityIndicatorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;
