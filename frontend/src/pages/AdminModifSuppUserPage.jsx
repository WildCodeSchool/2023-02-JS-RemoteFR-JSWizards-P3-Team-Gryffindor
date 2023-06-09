import AdminGerer from "../Components/AdminGerer";
import AdminModifUser from "../Components/AdminModifUser";
import AdminBar from "../Components/AdminBar";

function AdminModifSuppUserPage() {
  return (
    <div className="">
      <div className="flex w-2/6">
        <AdminBar />
        <div>
          <AdminGerer />
          <AdminModifUser />
        </div>
      </div>
    </div>
  );
}

export default AdminModifSuppUserPage;
