// jshint esversion:6
import { MovieCard } from "../components/home"
import { Header, Footer } from "../components/home"

export const HomePage: React.FC = () => {

    return (
        <>

            {/* Header */}
            <Header />


            {/* Main Section */}
            <section className="py-4 px-4 sm:px-[2.5rem] lg:px-[5rem]">
                <h3 className="text-lg font-bold">Featured Movie</h3>

                <div className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(0,_250px))] justify-center sm:justify-between place-content-center gap-y-7 gap-x-5">
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </section>

            {/* Footer */}
            <div className="my-5 mb-9">
                <Footer />
            </div>
        </>
    )
}