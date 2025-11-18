import React from "react";

export default function TeamList({ employes }) {
    return (
        <div className="row">
            {employes.map((persone) => (
                <div
                    key={persone.id}
                    className="col-lg-4 col-md-6 mb-4"
                    data-aos="fade-up"
                >
                    <div className="block-team-member-1 text-center rounded">
                        <figure>
                            <img
                                src={persone.img}
                                alt={persone.name}
                                className="img-fluid rounded-circle"
                            />
                        </figure>

                        <h3 className="font-size-20 text-black">{persone.name}</h3>

                        <span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">
                            {persone.role}
                        </span>

                        <div className="block-social-1">
                            <a
                                href={persone.socials.facebook}
                                className="btn border-w-2 rounded primary-primary-outline--hover"
                            >
                                <span className="icon-facebook" />
                            </a>
                            <a
                                href={persone.socials.twitter}
                                className="btn border-w-2 rounded primary-primary-outline--hover"
                            >
                                <span className="icon-twitter" />
                            </a>
                            <a
                                href={persone.socials.instagram}
                                className="btn border-w-2 rounded primary-primary-outline--hover"
                            >
                                <span className="icon-instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
