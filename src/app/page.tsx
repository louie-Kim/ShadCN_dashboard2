import AppBarChart from "@/components/AppBarChart";
import AppCarousel from "@/components/AppCarousel";
import AppHorizontalScroll from "@/components/AppHorizontalScroll";
import AppPieChart from "@/components/AppPieChart";
import AppRadarChart from "@/components/AppRadarChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppCarousel />
        <div className="flex items-center justify-center">
          <AppHorizontalScroll />
        </div>
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg ">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg ">
        <TodoList />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppRadarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg ">
        <CardList title="Popular Content" />
      </div>
    </div>
  );
}
