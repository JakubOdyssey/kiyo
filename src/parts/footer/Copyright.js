const year = new Date().getFullYear();
export default function Copyright() {
  return(
    <p className="footer-block footer-bottom-block">Copyright &#x00A9; { year } Kiyo Cloud. All rights reserved.</p>
  );
}
