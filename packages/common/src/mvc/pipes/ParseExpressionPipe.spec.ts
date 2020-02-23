import {ParamMetadata, ParamTypes} from "@tsed/common";
import {TestContext} from "@tsed/testing";
import {expect} from "chai";
import * as Sinon from "sinon";
import {ParseExpressionPipe} from "./ParseExpressionPipe";

const sandbox = Sinon.createSandbox();
describe("ParseExpressionPipe", () => {
  beforeEach(TestContext.create);
  beforeEach(TestContext.reset);
  afterEach(() => {
    sandbox.restore();
  });
  it(
    "should parse expression",
    TestContext.inject([ParseExpressionPipe], (pipe: ParseExpressionPipe) => {
      // @ts-ignore
      class Test {}

      const param = new ParamMetadata({
        index: 0,
        target: Test,
        propertyKey: "test",
        expression: "test",
        paramType: ParamTypes.REQUEST
      });
      // @ts-ignore
      param._type = String;
      param.collectionType = Array;
      // WHEN
      const value = pipe.transform(
        {
          test: "value"
        },
        param
      );

      expect(value).to.deep.eq("value");
    })
  );
  it(
    "should return empty value",
    TestContext.inject([ParseExpressionPipe], (pipe: ParseExpressionPipe) => {
      // @ts-ignore
      class Test {}

      const param = new ParamMetadata({
        index: 0,
        target: Test,
        propertyKey: "test",
        expression: "test",
        paramType: ParamTypes.REQUEST
      });
      // @ts-ignore
      param._type = String;
      param.collectionType = Array;
      // WHEN
      const value = pipe.transform(undefined, param);

      expect(value).to.deep.eq(undefined);
    })
  );
  it(
    "should parse expression (for HEADER)",
    TestContext.inject([ParseExpressionPipe], (pipe: ParseExpressionPipe) => {
      // @ts-ignore
      class Test {}

      const param = new ParamMetadata({
        index: 0,
        target: Test,
        propertyKey: "test",
        expression: "Content-Type",
        paramType: ParamTypes.HEADER
      });
      // @ts-ignore
      param._type = String;
      param.collectionType = Array;
      // WHEN
      const value = pipe.transform(
        {
          "content-type": "application/json"
        },
        param
      );

      expect(value).to.deep.eq("application/json");
    })
  );
  it(
    "should return undefined when value is empty and Boolean (for QUERY)",
    TestContext.inject([ParseExpressionPipe], (pipe: ParseExpressionPipe) => {
      // @ts-ignore
      class Test {}

      const param = new ParamMetadata({
        index: 0,
        target: Test,
        propertyKey: "test",
        expression: "test",
        paramType: ParamTypes.QUERY
      });
      // @ts-ignore
      param._type = Boolean;
      // WHEN
      const value = pipe.transform(
        {
          test: ""
        },
        param
      );

      expect(value).to.deep.eq(undefined);
    })
  );
  it(
    "should return empty when value is empty and String (for QUERY)",
    TestContext.inject([ParseExpressionPipe], (pipe: ParseExpressionPipe) => {
      // @ts-ignore
      class Test {}

      const param = new ParamMetadata({
        index: 0,
        target: Test,
        propertyKey: "test",
        expression: "test",
        paramType: ParamTypes.QUERY
      });
      // @ts-ignore
      param._type = String;
      // WHEN
      const value = pipe.transform(
        {
          test: ""
        },
        param
      );

      expect(value).to.deep.eq("");
    })
  );
  it(
    "should return undefined when value is empty and Boolean (for PATH)",
    TestContext.inject([ParseExpressionPipe], (pipe: ParseExpressionPipe) => {
      // @ts-ignore
      class Test {}

      const param = new ParamMetadata({
        index: 0,
        target: Test,
        propertyKey: "test",
        expression: "test",
        paramType: ParamTypes.PATH
      });
      // @ts-ignore
      param._type = Boolean;
      // WHEN
      const value = pipe.transform(
        {
          test: ""
        },
        param
      );

      expect(value).to.deep.eq(undefined);
    })
  );
  it(
    "should return empty when value is empty and String (for PATH)",
    TestContext.inject([ParseExpressionPipe], (pipe: ParseExpressionPipe) => {
      // @ts-ignore
      class Test {}

      const param = new ParamMetadata({
        index: 0,
        target: Test,
        propertyKey: "test",
        expression: "test",
        paramType: ParamTypes.PATH
      });
      // @ts-ignore
      param._type = String;
      // WHEN
      const value = pipe.transform(
        {
          test: ""
        },
        param
      );

      expect(value).to.deep.eq("");
    })
  );
});
