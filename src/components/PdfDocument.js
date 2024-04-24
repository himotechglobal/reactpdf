import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react' ;

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        padding: '50px'
    },
    section: {
        flexGrow: 1,
    }
})

const PdfDocument = ({content}) => {
    return(
        <Document>
            <Page size={"A4"} style={styles.page} >
                <View style={styles.section} >
                    <Text>{content}</Text>
                </View>
            </Page>
        </Document>
    )
}

export default PdfDocument;