

import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async () => {
  

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Amine bensaadat
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="hidden" name="id" value="1"/>
          <label>Username</label>
          <input type="text" name="username" placeholder="amine bensaadat" />
          <label>Email</label>
          <input type="email" name="email" placeholder="bensaadat.amine@gmail.com " />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="0624681853" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="casa" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected="selected">Yes</option>
            <option value={false} selected={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={true}>Yes</option>
            <option value={false} selected={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;