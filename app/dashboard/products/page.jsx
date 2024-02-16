import Link from "next/link";
import Image from "next/image";
import styles from "@/app/ui/dashboard/products/product.module.css";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product ... " />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Create at</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <td>
            <div className={styles.product}>
              <Image
                src="/noproduct.jpg"
                alt=""
                width={40}
                height={40}
                className={styles.productImage}
              />
              Iphone
            </div>
          </td>
          <td>just a desc</td>
          <td>24/12/2024</td>
          <td>500 dh</td>
          <td>72</td>
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

export default ProductsPage;
