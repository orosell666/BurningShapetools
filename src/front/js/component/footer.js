import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer justify-content-center" >
		<div className="  justify-content-center   d-inline-flex">
			<p className=" ms-5">Made with <i className="fa fa-heart text-danger" /> by{" "}
				<a>orosell666</a>
			</p>
			<Link to="/contact">
				<a className="ms-5 text-decoration-none" href="#">Contact</a>
			</Link>
		</div>
	</footer>
);
