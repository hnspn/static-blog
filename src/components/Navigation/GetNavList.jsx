import React from "react";
// import FontIcon from "react-md/lib/FontIcons";
import GatsbyLink from "gatsby-link";

const Link = props => {
  const { href, to, ...others } = props;

  if (to) {
    return <GatsbyLink {...others} to={to} />;
  }

  return <a {...others} href={href} target="_blank" />;
};

function GetNavList(config) {
  const NavList = [
    {
      primaryText: "Home",
      // LeftIcon: <p>home</p>,
      component: Link,
      to: "/"
    },
    {
      divider: true
    }
  ];

  if (config.userLinks) {
    config.userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        // LeftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
        component: "a",
        href: link.url
      });
    });
  }

  NavList.push({ divider: true });

  NavList.push({
    primaryText: "Linkedin",
    component: Link,
    href: "https://www.linkedin.com/in/bouzianea/"
  });

  NavList.push({
    primaryText: "Resume",
    component: Link,
    href: "/resume.pdf"
  });

  // NavList.push({
  //   primaryText: "About",
  //   // LeftIcon: <FontIcon>person</FontIcon>,
  //   component: Link,
  //   to: "/about/"
  // });
  return NavList;
}
export default GetNavList;
