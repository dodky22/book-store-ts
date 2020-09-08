import React from "react";
import styles from "../../assets/CheckoutForm.module.css";

import { FaCheckCircle } from "react-icons/fa";

interface Props {
  currentStep: number;
}

const StepsHeader = ({ currentStep }: Props) => {
  return (
    <div className={styles.steps}>
      <div className={currentStep <= 3 ? styles.thisStep : undefined}>
        <FaCheckCircle className={styles.checkIcon} />
        <span className={styles.checkSpan}> Your Details</span>
      </div>
      <div className={currentStep > 1 ? styles.thisStep : undefined}>
        <FaCheckCircle className={styles.checkIcon} />{" "}
        <span className={styles.checkSpan}> Delivery details</span>
      </div>
      <div className={currentStep === 3 ? styles.thisStep : undefined}>
        <FaCheckCircle className={styles.checkIcon} />{" "}
        <span className={styles.checkSpan}> Summary</span>
      </div>
    </div>
  );
};

export default StepsHeader;
