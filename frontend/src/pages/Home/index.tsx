import Footer from "components/footer";
import NavBar from "components/navbar";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">DSVendas</h1>
                    <p className="lead">Analyze your sales performance from different perspectives</p>
                    <hr />
                    <p>this application consist to show a dashboard from datas of a back end built with Spring Boot.</p>
                    <Link className="btn btn-primary btn-lg" to="/dashboard">
                        Access the dashboard
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );

}

export default Home;
