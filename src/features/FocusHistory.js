import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'; 
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {

    const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

    if(!history || !history.length) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>We haven't focused on anything yet!</Text>
            </View>
        )
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Things we've focused on:</Text>
            <FlatList 
                data={history}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: spacing.lg,
    },
    title: {
        color: colors.white,
        fontSize: fontSizes.lg,
        fontWeight: 'bold',
    },
    item: {
        fontSize: fontSizes.md,
        color: colors.white,
        paddingTop: spacing.sm,
    }
});