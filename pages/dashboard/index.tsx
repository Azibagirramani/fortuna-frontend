import BaseDashboardLayout from "../../../layouts/private/PrivateDashboardLayout";

import BaseButton from "../../../components/forms/BaseButton";

const DetailCard = () => {
  return (
    <div className="border p-4 rounded cursor-pointer hover:bg-blue-primary transition-all hover:text-white">
      <h3>IOS App UI/UX Design</h3>
      <p>$4000</p>
      <p>4 hours ago</p>
    </div>
  );
};

function Dashboard() {
  return (
    <div className="flex justify-between mx-5">
      <div className="flex-1">
        <div className="mt-10">
          <h1 className="text-2xl font-bold">Welcome back, Kelvin Mansi</h1>
          <p> You have 6 Notifications and 2 new Messages </p>
        </div>

        <div className="flex gap-10 mt-20">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Active post</h1>
            <div className="flex flex-col gap-5 mt-4">
              {[1, 2, 3, 4].map((item) => (
                <DetailCard key={item} />
              ))}
            </div>
            <div className="mt-3">
              <BaseButton>View more</BaseButton>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Recent Payments</h1>
            <div className="flex flex-col gap-5 mt-4">
              {[1, 2, 3, 4].map((item) => (
                <DetailCard key={item} />
              ))}
            </div>
            <div className="mt-3">
              <BaseButton>View more</BaseButton>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Comments</h1>
            <div className="flex flex-col gap-5 mt-4">
              {[1, 2, 3, 4].map((item) => (
                <DetailCard key={item} />
              ))}
            </div>
            <div className="mt-3">
              <BaseButton>View more</BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Dashboard.getLayout = BaseDashboardLayout;

export default Dashboard;
