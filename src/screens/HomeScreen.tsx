// screens/HomeScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, FlatList, StyleSheet, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/fetchProductsActions';
import { RootState } from '../redux/states/rootState';
import { FetchProductsState } from '../redux/states/fetchProductsState';
import type { } from 'redux-thunk/extend-redux';
const HomeScreen = () => {
    const dispatch = useDispatch();
    const { products, loading, error }: FetchProductsState = useSelector((state: RootState) => {
        // console.log(`State : ${state.productList.loading}`)
        return state.productList
    });

    const handleFetchProducts = () => {
        dispatch(fetchProducts());
    };

    useEffect(() => {
        // Automatically fetch products when the component mounts
        dispatch(handleFetchProducts);
    }, [dispatch]);

    // Define a function to render each product item
    const renderProductItem = ({ item }: { item: Product }) => (
        <View style={styles.productItem}>
            <Image
                source={{ uri: item.thumbnail }} // Replace with your image URL property
                style={styles.productImage}
            />
            <View style={styles.productDetails}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
                <Text>${item.price}</Text>
            </View>
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
                <View style={{ backgroundColor: 'white', }}>
                    <FlatList
                        data={products}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderProductItem}
                        numColumns={2}
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
    activityIndicatorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    productItem: {
        width: '45%', // Each item takes up 50% of the screen width
        backgroundColor: '#fff',
        padding: 5,
        margin: 5,
        borderRadius: 5,
    },
    productImage: {
        width: '100%',
        backgroundColor: '#f6f6f6',
        aspectRatio: 1,
        resizeMode: 'cover',
        marginBottom: 10,
    },
    productDetails: {
        alignItems: 'flex-start',
    },
});

export default HomeScreen;
