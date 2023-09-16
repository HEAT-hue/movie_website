// jshint esversion:6
import { Header, Footer } from "../components/home"
import { FeaturedMovies } from "../components/home"

export const HomePage: React.FC = () => {

    return (
        <>
            {/* Header */}
            <Header />

            {/* Main Section */}
            <FeaturedMovies />

            {/* Footer */}
            <div className="my-5 mb-9">
                <Footer />
            </div>
        </>
    )
}