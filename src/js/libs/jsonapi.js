const JSONAPISerializer = require("jsonapi-serializer").Serializer;
const JSONAPIDeserializer = require("jsonapi-serializer").Deserializer;

export async function deserialize(payload) {
  try {
    let deserializedData = await new JSONAPIDeserializer({
      keyForAttribute: "kebab-case",
    }).deserialize(payload, () => {});
    return {
      status: payload.status,
      data: deserializedData,
    };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export function parseError(payload) {
  const response = {
    status: payload.status,
    errors: payload.errors,
  };
  return response;
}

export function serialize(
  payload,
  type = "entity",
  entityAttributes = Object.keys(payload)
) {
  let result = new JSONAPISerializer(type, {
    attributes: entityAttributes,
    keyForAttribute: "kebab-case",
    meta: {
      connector: "google",
    },
  }).serialize(payload);
  return result;
}
