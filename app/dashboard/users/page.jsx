import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Image from "next/image";
import Link from "next/link";
const Userspage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user ... " />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <td>
            <div className={styles.user}>
              <Image
                src="/noavatar.png"
                alt=""
                width={40}
                height={40}
                className={styles.userImage}
              />
              amine bensaadat
            </div>
          </td>
          <td>bensaadat.amine@gmail.com</td>
          <td>24/12/2024</td>
          <td>admine</td>
          <td>active</td>
          <td>
            <div className={styles.buttons}>
              <Link href={`/dashboard/users/2`}>
                <button className={`${styles.button} ${styles.view}`}>
                  View
                </button>
              </Link>
              <form action="">
                <input type="hidden" name="id" value="5" />
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </form>
            </div>
          </td>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Userspage;
