"use strict";

Java.perform(function () {
  let RequestBuilder = Java.use("okhttp3.Request$Builder");
  RequestBuilder.build.implementation = function () {
    let headers = this._headers.value;

    if (this._url.value == "https://medium.com/_/graphql") {
      let apolloOperationName = headers["get"]("X-Apollo-Operation-Name");

      if (apolloOperationName == "FullPostQuery") {
        headers.removeAll("User-Agent");
        headers.removeAll("Cookie");

        headers.add("User-Agent", "donkey/4.5.1151200");
      }
    }

    return this.build();
  };

  let ResponseBuilder = Java.use("okhttp3.Response$Builder");
  ResponseBuilder.$init.overload("okhttp3.Response").implementation = function (
    response
  ) {
    let request = response.request.value;
    let requestHeaders = request.headers.value;

    if (request.url.value == "https://medium.com/_/graphql") {
      let grahpqlOperationName = requestHeaders.get("X-Apollo-Operation-Name");

      if (grahpqlOperationName == "FullPostQuery") {
        let newHeaders = response.headers.value.newBuilder();

        newHeaders["removeAll"]("Set-Cookie");

        response.headers.value = newHeaders.build();
      }
    }

    this.$init(response);
  };
});
