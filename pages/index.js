import TravelPlan from "../components/TravelPlan";
import TravelPlanForm from "../components/TravelPlanForm";

export default function HomePage({ travelPlans, onAddTravelPlan }) {
  return (
    <>
      <TravelPlanForm addTravelPlan={onAddTravelPlan} />
      {travelPlans.map((plan, index) => (
        <TravelPlan key={index} plan={plan} />
      ))}
    </>
  );
}
