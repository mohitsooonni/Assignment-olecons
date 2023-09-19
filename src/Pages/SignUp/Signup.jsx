import React, { useState } from "react";
import "./Signup.scss";
import DefaultPic from "../../Images/Default.png";
import arrow from "../../Images/arrow.svg";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const { t } = useTranslation();
  const [file, setFile] = useState(DefaultPic);

  return (
    <>
      <div className="signup">
        <div className="info">
          <p>
            {t("signup.personalInformation")} :
          </p>
          <div className="personal-section">
            <div className="photo-section">
              <div className="show-image">
                <img
                  src={file}
                  alt="pic-to-upload"
                />

                <input
                  type="file"
                  className="file-input"
                  style={{ display: "none" }}
                  onChange={(e) =>
                    setFile(
                      URL.createObjectURL(
                        e.target.files[0]
                      )
                    )
                  }
                  placeholder={t(
                    "signup.uploadPhoto"
                  )}
                />
                <label
                  onClick={() =>
                    document
                      .querySelector(
                        ".file-input"
                      )
                      .click()
                  }
                >
                  {t("signup.uploadPhoto")}
                </label>
              </div>
            </div>

            <div className="input-section">
              <input
                type="text"
                required
                placeholder={t("signup.fullName")}
              />
              <input
                type="text"
                required
                placeholder={t(
                  "signup.emailAddress"
                )}
              />
              <input
                type="text"
                required
                placeholder={t(
                  "signup.phoneNumber"
                )}
              />
              <input
                type="text"
                required
                placeholder={t("signup.dob")}
              />
            </div>
          </div>
        </div>

        <div className="expertise">
          <p>{t("signup.areasOfExpertise")} :</p>

          <div className="expertise-section">
            <select
              name="category"
              selected="category"
              required
            >
              <option value="category">
                {t("signup.category")}
              </option>
              <option value="category2">
                {t("signup.category2")}
              </option>
              <option value="category3">
                {t("signup.category3")}
              </option>
            </select>
            <select
              name="subcategory"
              selected="subcategory"
            >
              <option value="subcategory">
                {t("signup.subCategory")}
              </option>
              <option value="subcategory2">
                {t("signup.subCategory2")}
              </option>
              <option value="subcategory3">
                {t("signup.subCategory3")}
              </option>
            </select>
          </div>
        </div>

        <div className="availability">
          <p>{t("signup.availability")} :</p>
          <select
            required
            name="availabledays"
            selected="availabledays"
          >
            <option value="availabledays">
              {t("signup.availableDays")}
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div className="about-experience">
          <p>{t("signup.aboutExperience")} :</p>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            required
          ></textarea>
        </div>
        <div className="button">
          <button>
            {t("signup.register")}{" "}
            <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
