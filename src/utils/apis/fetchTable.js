function fetchTable() {
  let url =
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cdb9513c-7543-4db5-8b3e-416595e5f1b1/output.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221017T061253Z&X-Amz-Expires=86400&X-Amz-Signature=b7a5a8aa82f9066c25a8069adf37230f7a54e587fa3c4c340b8e2ba5d0125653&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22output.json%22&x-id=GetObject";

  return fetch(url, {
    method: "GET"
  });
}
export default fetchTable;
