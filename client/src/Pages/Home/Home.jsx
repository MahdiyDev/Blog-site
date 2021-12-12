import Header from '../../Components/Header/Header';
import Main from '../../Components/Main/Main';
import ReanderPosts from '../../Components/RenderPosts/ReanderPosts';
import './Home.scss'

function Home() {
    return (
        <>
            <Header />
            <Main>
                <div className="home">
                    <ReanderPosts />
                </div>
            </Main>
        </>
    )
}

export default Home;
