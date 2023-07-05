import AdminGerer from "../components/AdminGerer";
import AdminModifUser from "../components/AdminModifUser";
import AdminBar from "../components/AdminBar";

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
