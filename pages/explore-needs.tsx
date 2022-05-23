/**
 * @description
 * This is just a demo for our needs section.
 * For a start, we are going to use simple list to display all needs,
 * then we will use highmap library to display location of needs.
 */

// component import
import BaseCard from "../components/BaseCards";
import BaseMaps from "../components/charts/maps";
import BaseFilter from "../components/filter/BaseFilter";

function Needs() {

    const cardCount: number[] = [1, 2, 4, 5, 6, 72, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,]

    const NeedCard = cardCount.map((items, index) => {
        return <div key={index}>
            <BaseCard />
        </div>
    }
    )

    return (
        <div className="flex h-screen">
            <div className="flex-auto w-80">
                <BaseFilter />
                <div className="mt-10">
                    <BaseMaps />
                </div>
            </div>
            <div className="flex-auto w-20 overflow-y-auto">
                {NeedCard}
            </div>
        </div >
    )

}

export default Needs;