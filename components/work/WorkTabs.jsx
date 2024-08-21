import TabsComponent from "../UI/WorkTabs"
import { projects, projectCategories } from "@/lib/data"
const WorkTabs=() => {
    return (
        <div className="w-full h-full z-20">
            <TabsComponent categories={projectCategories} items={projects} />
        </div>
    )
}

export default WorkTabs