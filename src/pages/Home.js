import Paragraph from "../components/Paragraph"

const Home = ({content}) => {
        return (
            <>
               <Paragraph content={content} />
                <a href="/pdf" >View PDF</a>
            </>
        )
}

export default Home;