/**
 * Product API
 * Pactflow Product API demo
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

import * as api from "./api"
import { Configuration } from "./configuration"
import { PactV3, MatchersV3 } from "@pact-foundation/pact";

const config: Configuration = {}

const {
  eachLike,
  atLeastLike,
  integer,
  datetime,
  boolean,
  string,
  regex,
  like,
  eachKeyLike,
} = MatchersV3;

describe("DefaultApi", () => {

  let instance: api.DefaultApi
  
  const provider = new PactV3({
  consumer: "DefaultApi-consumer",
  provider: "DefaultApi",
  });


  test("createProduct", () => {

    const body: { [key:string]: api.Product } = {
  "value" : {
    "id" : "1234",
    "type" : "food",
    "price" : 42,
    "name" : "42"
  }
}
    provider
      .given("createProduct is available on DefaultApi service")
      .uponReceiving("A POST request for createProduct")
      .withRequest({
        method: "POST",
        path: "/products",
        contentType: "application/json",
        body: body.value,
      })
      .willRespondWith({
        status: 200,
        body: {"id":"1234","type":"food","price":42},
        contentType: "application/json; charset&#x3D;utf-8",

      });
    return provider.executeTest(async(mockserver) => {
      instance = new api.DefaultApi(config,mockserver.url)
      const result = await instance.createProduct( body.value, {})
      expect(result).toEqual(
        {"id":"1234","type":"food","price":42}
        )
    });
  })
  test("getAllProducts", () => {

    provider
      .given("getAllProducts is available on DefaultApi service")
      .uponReceiving("A GET request for getAllProducts")
      .withRequest({
        method: "GET",
        path: "/products",
        
      })
      .willRespondWith({
        status: 200,
        body: [{"id":"1234","type":"food","price":42}],
        contentType: "application/json; charset&#x3D;utf-8",

      });
    return provider.executeTest(async(mockserver) => {
      instance = new api.DefaultApi(config,mockserver.url)
      const result = await instance.getAllProducts({})
      expect(result).toEqual(
        [{"id":"1234","type":"food","price":42}]
                )
    });
  })
  test("getProductByID", () => {

    const id: string = "id_example"
    provider
      .given("getProductByID is available on DefaultApi service")
      .uponReceiving("A GET request for getProductByID")
      .withRequest({
        method: "GET",
        path:  `/product/{id}`.replace(`{ id }`.replace(/\s/g, ''),id),
        
      })
      .willRespondWith({
        status: 200,
        body: {"id":"1234","type":"food","price":42},
        contentType: "application/json; charset&#x3D;utf-8",

      });
    return provider.executeTest(async(mockserver) => {
      instance = new api.DefaultApi(config,mockserver.url)
      const result = await instance.getProductByID( id, {})
      expect(result).toEqual(
        {"id":"1234","type":"food","price":42}
                        )
    });
  })
})

