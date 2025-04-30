import { createClient } from "redis";

const client = createClient({
  username: "default",
  password: "U2ttbLe69cqHOpXh6TQ3xQlqIdsCcXrr",
  socket: {
    host: "redis-14238.c276.us-east-1-2.ec2.redns.redis-cloud.com",
    port: 14238,
  },
});

client.on("error", (err) => {
  console.log("Redis Client Error", err);
  isRedisConnected = false;
});

let isRedisConnected = false;

client
  .connect()
  .then(() => {
    console.log("Redis connected");
    isRedisConnected = true;
    return isRedisConnected;
  })
  .catch(console.error);

export { client, isRedisConnected };

// await client.set("foo", "bar");
// const result = await client.get("foo");
// console.log(result); // >>> bar
