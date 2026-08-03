// Local Modules
import fiction from "../../../assets/fiction.png";
import scifi from "../../../assets/scifi.png";
import fantasy from "../../../assets/fantasy.png";
import tech from "../../../assets/tech.png";

const ExploreGenres = () => {
    return (
        <section className="mt-[3em]">
            <h3 className="text-3xl font-bold mb-[1em]">Explore genres</h3>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white text-[#6D28D9] rounded-[24px] py-[4em] pl-[2em]">
                    <img src={fiction} alt="fiction" className="w-[100px]" />
                    <p className="text-2xl font-bold mt-[8px]">Fiction</p>
                </div>
                <div className="bg-white text-[#1D4ED8] rounded-[24px] py-[4em] pl-[2em]">
                    <img src={scifi} alt="Sci-Fi" className="w-[100px]" />
                    <p className="text-2xl font-bold mt-[8px]">Sci-Fi</p>
                </div>
                <div className="bg-white text-[#166534] rounded-[24px] py-[4em] pl-[2em]">
                    <img src={tech} alt="tech" className="w-[100px]" />
                    <p className="text-2xl font-bold mt-[8px]">Tech</p>
                </div>
                <div className="bg-white text-[#92400E] rounded-[24px] py-[4em] pl-[2em]">
                    <img src={fantasy} alt="fantasy" className="w-[100px]" />
                    <p className="text-2xl font-bold mt-[8px]">Fantasy</p>
                </div>
            </div>
        </section>
    );
};

export default ExploreGenres;
