
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Monitor
 * 
 */
export type Monitor = $Result.DefaultSelection<Prisma.$MonitorPayload>
/**
 * Model Check
 * 
 */
export type Check = $Result.DefaultSelection<Prisma.$CheckPayload>
/**
 * Model Incident
 * 
 */
export type Incident = $Result.DefaultSelection<Prisma.$IncidentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CheckStatus: {
  UP: 'UP',
  DOWN: 'DOWN',
  WARNING: 'WARNING',
  UNKNOWN: 'UNKNOWN'
};

export type CheckStatus = (typeof CheckStatus)[keyof typeof CheckStatus]

}

export type CheckStatus = $Enums.CheckStatus

export const CheckStatus: typeof $Enums.CheckStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monitor`: Exposes CRUD operations for the **Monitor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Monitors
    * const monitors = await prisma.monitor.findMany()
    * ```
    */
  get monitor(): Prisma.MonitorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.check`: Exposes CRUD operations for the **Check** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Checks
    * const checks = await prisma.check.findMany()
    * ```
    */
  get check(): Prisma.CheckDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incident`: Exposes CRUD operations for the **Incident** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incidents
    * const incidents = await prisma.incident.findMany()
    * ```
    */
  get incident(): Prisma.IncidentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Monitor: 'Monitor',
    Check: 'Check',
    Incident: 'Incident'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "monitor" | "check" | "incident"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Monitor: {
        payload: Prisma.$MonitorPayload<ExtArgs>
        fields: Prisma.MonitorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonitorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonitorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>
          }
          findFirst: {
            args: Prisma.MonitorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonitorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>
          }
          findMany: {
            args: Prisma.MonitorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>[]
          }
          create: {
            args: Prisma.MonitorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>
          }
          createMany: {
            args: Prisma.MonitorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonitorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>[]
          }
          delete: {
            args: Prisma.MonitorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>
          }
          update: {
            args: Prisma.MonitorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>
          }
          deleteMany: {
            args: Prisma.MonitorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonitorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MonitorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>[]
          }
          upsert: {
            args: Prisma.MonitorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>
          }
          aggregate: {
            args: Prisma.MonitorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonitor>
          }
          groupBy: {
            args: Prisma.MonitorGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonitorGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonitorCountArgs<ExtArgs>
            result: $Utils.Optional<MonitorCountAggregateOutputType> | number
          }
        }
      }
      Check: {
        payload: Prisma.$CheckPayload<ExtArgs>
        fields: Prisma.CheckFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPayload>
          }
          findFirst: {
            args: Prisma.CheckFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPayload>
          }
          findMany: {
            args: Prisma.CheckFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPayload>[]
          }
          create: {
            args: Prisma.CheckCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPayload>
          }
          createMany: {
            args: Prisma.CheckCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CheckCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPayload>[]
          }
          delete: {
            args: Prisma.CheckDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPayload>
          }
          update: {
            args: Prisma.CheckUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPayload>
          }
          deleteMany: {
            args: Prisma.CheckDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CheckUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPayload>[]
          }
          upsert: {
            args: Prisma.CheckUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckPayload>
          }
          aggregate: {
            args: Prisma.CheckAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheck>
          }
          groupBy: {
            args: Prisma.CheckGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckCountArgs<ExtArgs>
            result: $Utils.Optional<CheckCountAggregateOutputType> | number
          }
        }
      }
      Incident: {
        payload: Prisma.$IncidentPayload<ExtArgs>
        fields: Prisma.IncidentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findFirst: {
            args: Prisma.IncidentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findMany: {
            args: Prisma.IncidentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          create: {
            args: Prisma.IncidentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          createMany: {
            args: Prisma.IncidentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncidentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          delete: {
            args: Prisma.IncidentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          update: {
            args: Prisma.IncidentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          deleteMany: {
            args: Prisma.IncidentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncidentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          upsert: {
            args: Prisma.IncidentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          aggregate: {
            args: Prisma.IncidentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncident>
          }
          groupBy: {
            args: Prisma.IncidentGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidentCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    monitor?: MonitorOmit
    check?: CheckOmit
    incident?: IncidentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    monitors: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monitors?: boolean | UserCountOutputTypeCountMonitorsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMonitorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonitorWhereInput
  }


  /**
   * Count Type MonitorCountOutputType
   */

  export type MonitorCountOutputType = {
    checks: number
    incidents: number
  }

  export type MonitorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checks?: boolean | MonitorCountOutputTypeCountChecksArgs
    incidents?: boolean | MonitorCountOutputTypeCountIncidentsArgs
  }

  // Custom InputTypes
  /**
   * MonitorCountOutputType without action
   */
  export type MonitorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitorCountOutputType
     */
    select?: MonitorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MonitorCountOutputType without action
   */
  export type MonitorCountOutputTypeCountChecksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckWhereInput
  }

  /**
   * MonitorCountOutputType without action
   */
  export type MonitorCountOutputTypeCountIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    monitors?: boolean | User$monitorsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monitors?: boolean | User$monitorsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      monitors: Prisma.$MonitorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    monitors<T extends User$monitorsArgs<ExtArgs> = {}>(args?: Subset<T, User$monitorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.monitors
   */
  export type User$monitorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorInclude<ExtArgs> | null
    where?: MonitorWhereInput
    orderBy?: MonitorOrderByWithRelationInput | MonitorOrderByWithRelationInput[]
    cursor?: MonitorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonitorScalarFieldEnum | MonitorScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Monitor
   */

  export type AggregateMonitor = {
    _count: MonitorCountAggregateOutputType | null
    _avg: MonitorAvgAggregateOutputType | null
    _sum: MonitorSumAggregateOutputType | null
    _min: MonitorMinAggregateOutputType | null
    _max: MonitorMaxAggregateOutputType | null
  }

  export type MonitorAvgAggregateOutputType = {
    interval: number | null
  }

  export type MonitorSumAggregateOutputType = {
    interval: number | null
  }

  export type MonitorMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    interval: number | null
    isActive: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonitorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    interval: number | null
    isActive: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonitorCountAggregateOutputType = {
    id: number
    name: number
    url: number
    interval: number
    isActive: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MonitorAvgAggregateInputType = {
    interval?: true
  }

  export type MonitorSumAggregateInputType = {
    interval?: true
  }

  export type MonitorMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    interval?: true
    isActive?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonitorMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    interval?: true
    isActive?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonitorCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    interval?: true
    isActive?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MonitorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Monitor to aggregate.
     */
    where?: MonitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monitors to fetch.
     */
    orderBy?: MonitorOrderByWithRelationInput | MonitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Monitors
    **/
    _count?: true | MonitorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonitorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonitorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonitorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonitorMaxAggregateInputType
  }

  export type GetMonitorAggregateType<T extends MonitorAggregateArgs> = {
        [P in keyof T & keyof AggregateMonitor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonitor[P]>
      : GetScalarType<T[P], AggregateMonitor[P]>
  }




  export type MonitorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonitorWhereInput
    orderBy?: MonitorOrderByWithAggregationInput | MonitorOrderByWithAggregationInput[]
    by: MonitorScalarFieldEnum[] | MonitorScalarFieldEnum
    having?: MonitorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonitorCountAggregateInputType | true
    _avg?: MonitorAvgAggregateInputType
    _sum?: MonitorSumAggregateInputType
    _min?: MonitorMinAggregateInputType
    _max?: MonitorMaxAggregateInputType
  }

  export type MonitorGroupByOutputType = {
    id: string
    name: string
    url: string
    interval: number
    isActive: boolean
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: MonitorCountAggregateOutputType | null
    _avg: MonitorAvgAggregateOutputType | null
    _sum: MonitorSumAggregateOutputType | null
    _min: MonitorMinAggregateOutputType | null
    _max: MonitorMaxAggregateOutputType | null
  }

  type GetMonitorGroupByPayload<T extends MonitorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonitorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonitorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonitorGroupByOutputType[P]>
            : GetScalarType<T[P], MonitorGroupByOutputType[P]>
        }
      >
    >


  export type MonitorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    interval?: boolean
    isActive?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    checks?: boolean | Monitor$checksArgs<ExtArgs>
    incidents?: boolean | Monitor$incidentsArgs<ExtArgs>
    _count?: boolean | MonitorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monitor"]>

  export type MonitorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    interval?: boolean
    isActive?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monitor"]>

  export type MonitorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    interval?: boolean
    isActive?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monitor"]>

  export type MonitorSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    interval?: boolean
    isActive?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MonitorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "interval" | "isActive" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["monitor"]>
  export type MonitorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    checks?: boolean | Monitor$checksArgs<ExtArgs>
    incidents?: boolean | Monitor$incidentsArgs<ExtArgs>
    _count?: boolean | MonitorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MonitorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MonitorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MonitorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Monitor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      checks: Prisma.$CheckPayload<ExtArgs>[]
      incidents: Prisma.$IncidentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      url: string
      interval: number
      isActive: boolean
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["monitor"]>
    composites: {}
  }

  type MonitorGetPayload<S extends boolean | null | undefined | MonitorDefaultArgs> = $Result.GetResult<Prisma.$MonitorPayload, S>

  type MonitorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonitorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonitorCountAggregateInputType | true
    }

  export interface MonitorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Monitor'], meta: { name: 'Monitor' } }
    /**
     * Find zero or one Monitor that matches the filter.
     * @param {MonitorFindUniqueArgs} args - Arguments to find a Monitor
     * @example
     * // Get one Monitor
     * const monitor = await prisma.monitor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonitorFindUniqueArgs>(args: SelectSubset<T, MonitorFindUniqueArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Monitor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonitorFindUniqueOrThrowArgs} args - Arguments to find a Monitor
     * @example
     * // Get one Monitor
     * const monitor = await prisma.monitor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonitorFindUniqueOrThrowArgs>(args: SelectSubset<T, MonitorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Monitor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitorFindFirstArgs} args - Arguments to find a Monitor
     * @example
     * // Get one Monitor
     * const monitor = await prisma.monitor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonitorFindFirstArgs>(args?: SelectSubset<T, MonitorFindFirstArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Monitor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitorFindFirstOrThrowArgs} args - Arguments to find a Monitor
     * @example
     * // Get one Monitor
     * const monitor = await prisma.monitor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonitorFindFirstOrThrowArgs>(args?: SelectSubset<T, MonitorFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Monitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Monitors
     * const monitors = await prisma.monitor.findMany()
     * 
     * // Get first 10 Monitors
     * const monitors = await prisma.monitor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monitorWithIdOnly = await prisma.monitor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonitorFindManyArgs>(args?: SelectSubset<T, MonitorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Monitor.
     * @param {MonitorCreateArgs} args - Arguments to create a Monitor.
     * @example
     * // Create one Monitor
     * const Monitor = await prisma.monitor.create({
     *   data: {
     *     // ... data to create a Monitor
     *   }
     * })
     * 
     */
    create<T extends MonitorCreateArgs>(args: SelectSubset<T, MonitorCreateArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Monitors.
     * @param {MonitorCreateManyArgs} args - Arguments to create many Monitors.
     * @example
     * // Create many Monitors
     * const monitor = await prisma.monitor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonitorCreateManyArgs>(args?: SelectSubset<T, MonitorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Monitors and returns the data saved in the database.
     * @param {MonitorCreateManyAndReturnArgs} args - Arguments to create many Monitors.
     * @example
     * // Create many Monitors
     * const monitor = await prisma.monitor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Monitors and only return the `id`
     * const monitorWithIdOnly = await prisma.monitor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonitorCreateManyAndReturnArgs>(args?: SelectSubset<T, MonitorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Monitor.
     * @param {MonitorDeleteArgs} args - Arguments to delete one Monitor.
     * @example
     * // Delete one Monitor
     * const Monitor = await prisma.monitor.delete({
     *   where: {
     *     // ... filter to delete one Monitor
     *   }
     * })
     * 
     */
    delete<T extends MonitorDeleteArgs>(args: SelectSubset<T, MonitorDeleteArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Monitor.
     * @param {MonitorUpdateArgs} args - Arguments to update one Monitor.
     * @example
     * // Update one Monitor
     * const monitor = await prisma.monitor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonitorUpdateArgs>(args: SelectSubset<T, MonitorUpdateArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Monitors.
     * @param {MonitorDeleteManyArgs} args - Arguments to filter Monitors to delete.
     * @example
     * // Delete a few Monitors
     * const { count } = await prisma.monitor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonitorDeleteManyArgs>(args?: SelectSubset<T, MonitorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Monitors
     * const monitor = await prisma.monitor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonitorUpdateManyArgs>(args: SelectSubset<T, MonitorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monitors and returns the data updated in the database.
     * @param {MonitorUpdateManyAndReturnArgs} args - Arguments to update many Monitors.
     * @example
     * // Update many Monitors
     * const monitor = await prisma.monitor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Monitors and only return the `id`
     * const monitorWithIdOnly = await prisma.monitor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MonitorUpdateManyAndReturnArgs>(args: SelectSubset<T, MonitorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Monitor.
     * @param {MonitorUpsertArgs} args - Arguments to update or create a Monitor.
     * @example
     * // Update or create a Monitor
     * const monitor = await prisma.monitor.upsert({
     *   create: {
     *     // ... data to create a Monitor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Monitor we want to update
     *   }
     * })
     */
    upsert<T extends MonitorUpsertArgs>(args: SelectSubset<T, MonitorUpsertArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Monitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitorCountArgs} args - Arguments to filter Monitors to count.
     * @example
     * // Count the number of Monitors
     * const count = await prisma.monitor.count({
     *   where: {
     *     // ... the filter for the Monitors we want to count
     *   }
     * })
    **/
    count<T extends MonitorCountArgs>(
      args?: Subset<T, MonitorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonitorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Monitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonitorAggregateArgs>(args: Subset<T, MonitorAggregateArgs>): Prisma.PrismaPromise<GetMonitorAggregateType<T>>

    /**
     * Group by Monitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonitorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonitorGroupByArgs['orderBy'] }
        : { orderBy?: MonitorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonitorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonitorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Monitor model
   */
  readonly fields: MonitorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Monitor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonitorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    checks<T extends Monitor$checksArgs<ExtArgs> = {}>(args?: Subset<T, Monitor$checksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incidents<T extends Monitor$incidentsArgs<ExtArgs> = {}>(args?: Subset<T, Monitor$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Monitor model
   */
  interface MonitorFieldRefs {
    readonly id: FieldRef<"Monitor", 'String'>
    readonly name: FieldRef<"Monitor", 'String'>
    readonly url: FieldRef<"Monitor", 'String'>
    readonly interval: FieldRef<"Monitor", 'Int'>
    readonly isActive: FieldRef<"Monitor", 'Boolean'>
    readonly userId: FieldRef<"Monitor", 'String'>
    readonly createdAt: FieldRef<"Monitor", 'DateTime'>
    readonly updatedAt: FieldRef<"Monitor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Monitor findUnique
   */
  export type MonitorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorInclude<ExtArgs> | null
    /**
     * Filter, which Monitor to fetch.
     */
    where: MonitorWhereUniqueInput
  }

  /**
   * Monitor findUniqueOrThrow
   */
  export type MonitorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorInclude<ExtArgs> | null
    /**
     * Filter, which Monitor to fetch.
     */
    where: MonitorWhereUniqueInput
  }

  /**
   * Monitor findFirst
   */
  export type MonitorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorInclude<ExtArgs> | null
    /**
     * Filter, which Monitor to fetch.
     */
    where?: MonitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monitors to fetch.
     */
    orderBy?: MonitorOrderByWithRelationInput | MonitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Monitors.
     */
    cursor?: MonitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Monitors.
     */
    distinct?: MonitorScalarFieldEnum | MonitorScalarFieldEnum[]
  }

  /**
   * Monitor findFirstOrThrow
   */
  export type MonitorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorInclude<ExtArgs> | null
    /**
     * Filter, which Monitor to fetch.
     */
    where?: MonitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monitors to fetch.
     */
    orderBy?: MonitorOrderByWithRelationInput | MonitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Monitors.
     */
    cursor?: MonitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Monitors.
     */
    distinct?: MonitorScalarFieldEnum | MonitorScalarFieldEnum[]
  }

  /**
   * Monitor findMany
   */
  export type MonitorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorInclude<ExtArgs> | null
    /**
     * Filter, which Monitors to fetch.
     */
    where?: MonitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monitors to fetch.
     */
    orderBy?: MonitorOrderByWithRelationInput | MonitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Monitors.
     */
    cursor?: MonitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monitors.
     */
    skip?: number
    distinct?: MonitorScalarFieldEnum | MonitorScalarFieldEnum[]
  }

  /**
   * Monitor create
   */
  export type MonitorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorInclude<ExtArgs> | null
    /**
     * The data needed to create a Monitor.
     */
    data: XOR<MonitorCreateInput, MonitorUncheckedCreateInput>
  }

  /**
   * Monitor createMany
   */
  export type MonitorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Monitors.
     */
    data: MonitorCreateManyInput | MonitorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Monitor createManyAndReturn
   */
  export type MonitorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * The data used to create many Monitors.
     */
    data: MonitorCreateManyInput | MonitorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Monitor update
   */
  export type MonitorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorInclude<ExtArgs> | null
    /**
     * The data needed to update a Monitor.
     */
    data: XOR<MonitorUpdateInput, MonitorUncheckedUpdateInput>
    /**
     * Choose, which Monitor to update.
     */
    where: MonitorWhereUniqueInput
  }

  /**
   * Monitor updateMany
   */
  export type MonitorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Monitors.
     */
    data: XOR<MonitorUpdateManyMutationInput, MonitorUncheckedUpdateManyInput>
    /**
     * Filter which Monitors to update
     */
    where?: MonitorWhereInput
    /**
     * Limit how many Monitors to update.
     */
    limit?: number
  }

  /**
   * Monitor updateManyAndReturn
   */
  export type MonitorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * The data used to update Monitors.
     */
    data: XOR<MonitorUpdateManyMutationInput, MonitorUncheckedUpdateManyInput>
    /**
     * Filter which Monitors to update
     */
    where?: MonitorWhereInput
    /**
     * Limit how many Monitors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Monitor upsert
   */
  export type MonitorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorInclude<ExtArgs> | null
    /**
     * The filter to search for the Monitor to update in case it exists.
     */
    where: MonitorWhereUniqueInput
    /**
     * In case the Monitor found by the `where` argument doesn't exist, create a new Monitor with this data.
     */
    create: XOR<MonitorCreateInput, MonitorUncheckedCreateInput>
    /**
     * In case the Monitor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonitorUpdateInput, MonitorUncheckedUpdateInput>
  }

  /**
   * Monitor delete
   */
  export type MonitorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorInclude<ExtArgs> | null
    /**
     * Filter which Monitor to delete.
     */
    where: MonitorWhereUniqueInput
  }

  /**
   * Monitor deleteMany
   */
  export type MonitorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Monitors to delete
     */
    where?: MonitorWhereInput
    /**
     * Limit how many Monitors to delete.
     */
    limit?: number
  }

  /**
   * Monitor.checks
   */
  export type Monitor$checksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInclude<ExtArgs> | null
    where?: CheckWhereInput
    orderBy?: CheckOrderByWithRelationInput | CheckOrderByWithRelationInput[]
    cursor?: CheckWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckScalarFieldEnum | CheckScalarFieldEnum[]
  }

  /**
   * Monitor.incidents
   */
  export type Monitor$incidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Monitor without action
   */
  export type MonitorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorInclude<ExtArgs> | null
  }


  /**
   * Model Check
   */

  export type AggregateCheck = {
    _count: CheckCountAggregateOutputType | null
    _avg: CheckAvgAggregateOutputType | null
    _sum: CheckSumAggregateOutputType | null
    _min: CheckMinAggregateOutputType | null
    _max: CheckMaxAggregateOutputType | null
  }

  export type CheckAvgAggregateOutputType = {
    statusCode: number | null
    responseTime: number | null
  }

  export type CheckSumAggregateOutputType = {
    statusCode: number | null
    responseTime: number | null
  }

  export type CheckMinAggregateOutputType = {
    id: string | null
    monitorId: string | null
    status: $Enums.CheckStatus | null
    statusCode: number | null
    responseTime: number | null
    error: string | null
    checkedAt: Date | null
  }

  export type CheckMaxAggregateOutputType = {
    id: string | null
    monitorId: string | null
    status: $Enums.CheckStatus | null
    statusCode: number | null
    responseTime: number | null
    error: string | null
    checkedAt: Date | null
  }

  export type CheckCountAggregateOutputType = {
    id: number
    monitorId: number
    status: number
    statusCode: number
    responseTime: number
    error: number
    checkedAt: number
    _all: number
  }


  export type CheckAvgAggregateInputType = {
    statusCode?: true
    responseTime?: true
  }

  export type CheckSumAggregateInputType = {
    statusCode?: true
    responseTime?: true
  }

  export type CheckMinAggregateInputType = {
    id?: true
    monitorId?: true
    status?: true
    statusCode?: true
    responseTime?: true
    error?: true
    checkedAt?: true
  }

  export type CheckMaxAggregateInputType = {
    id?: true
    monitorId?: true
    status?: true
    statusCode?: true
    responseTime?: true
    error?: true
    checkedAt?: true
  }

  export type CheckCountAggregateInputType = {
    id?: true
    monitorId?: true
    status?: true
    statusCode?: true
    responseTime?: true
    error?: true
    checkedAt?: true
    _all?: true
  }

  export type CheckAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Check to aggregate.
     */
    where?: CheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checks to fetch.
     */
    orderBy?: CheckOrderByWithRelationInput | CheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Checks
    **/
    _count?: true | CheckCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CheckAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CheckSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckMaxAggregateInputType
  }

  export type GetCheckAggregateType<T extends CheckAggregateArgs> = {
        [P in keyof T & keyof AggregateCheck]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheck[P]>
      : GetScalarType<T[P], AggregateCheck[P]>
  }




  export type CheckGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckWhereInput
    orderBy?: CheckOrderByWithAggregationInput | CheckOrderByWithAggregationInput[]
    by: CheckScalarFieldEnum[] | CheckScalarFieldEnum
    having?: CheckScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckCountAggregateInputType | true
    _avg?: CheckAvgAggregateInputType
    _sum?: CheckSumAggregateInputType
    _min?: CheckMinAggregateInputType
    _max?: CheckMaxAggregateInputType
  }

  export type CheckGroupByOutputType = {
    id: string
    monitorId: string
    status: $Enums.CheckStatus
    statusCode: number | null
    responseTime: number | null
    error: string | null
    checkedAt: Date
    _count: CheckCountAggregateOutputType | null
    _avg: CheckAvgAggregateOutputType | null
    _sum: CheckSumAggregateOutputType | null
    _min: CheckMinAggregateOutputType | null
    _max: CheckMaxAggregateOutputType | null
  }

  type GetCheckGroupByPayload<T extends CheckGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckGroupByOutputType[P]>
            : GetScalarType<T[P], CheckGroupByOutputType[P]>
        }
      >
    >


  export type CheckSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monitorId?: boolean
    status?: boolean
    statusCode?: boolean
    responseTime?: boolean
    error?: boolean
    checkedAt?: boolean
    monitor?: boolean | MonitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["check"]>

  export type CheckSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monitorId?: boolean
    status?: boolean
    statusCode?: boolean
    responseTime?: boolean
    error?: boolean
    checkedAt?: boolean
    monitor?: boolean | MonitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["check"]>

  export type CheckSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monitorId?: boolean
    status?: boolean
    statusCode?: boolean
    responseTime?: boolean
    error?: boolean
    checkedAt?: boolean
    monitor?: boolean | MonitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["check"]>

  export type CheckSelectScalar = {
    id?: boolean
    monitorId?: boolean
    status?: boolean
    statusCode?: boolean
    responseTime?: boolean
    error?: boolean
    checkedAt?: boolean
  }

  export type CheckOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "monitorId" | "status" | "statusCode" | "responseTime" | "error" | "checkedAt", ExtArgs["result"]["check"]>
  export type CheckInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monitor?: boolean | MonitorDefaultArgs<ExtArgs>
  }
  export type CheckIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monitor?: boolean | MonitorDefaultArgs<ExtArgs>
  }
  export type CheckIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monitor?: boolean | MonitorDefaultArgs<ExtArgs>
  }

  export type $CheckPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Check"
    objects: {
      monitor: Prisma.$MonitorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      monitorId: string
      status: $Enums.CheckStatus
      statusCode: number | null
      responseTime: number | null
      error: string | null
      checkedAt: Date
    }, ExtArgs["result"]["check"]>
    composites: {}
  }

  type CheckGetPayload<S extends boolean | null | undefined | CheckDefaultArgs> = $Result.GetResult<Prisma.$CheckPayload, S>

  type CheckCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CheckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CheckCountAggregateInputType | true
    }

  export interface CheckDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Check'], meta: { name: 'Check' } }
    /**
     * Find zero or one Check that matches the filter.
     * @param {CheckFindUniqueArgs} args - Arguments to find a Check
     * @example
     * // Get one Check
     * const check = await prisma.check.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckFindUniqueArgs>(args: SelectSubset<T, CheckFindUniqueArgs<ExtArgs>>): Prisma__CheckClient<$Result.GetResult<Prisma.$CheckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Check that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CheckFindUniqueOrThrowArgs} args - Arguments to find a Check
     * @example
     * // Get one Check
     * const check = await prisma.check.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckClient<$Result.GetResult<Prisma.$CheckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Check that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckFindFirstArgs} args - Arguments to find a Check
     * @example
     * // Get one Check
     * const check = await prisma.check.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckFindFirstArgs>(args?: SelectSubset<T, CheckFindFirstArgs<ExtArgs>>): Prisma__CheckClient<$Result.GetResult<Prisma.$CheckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Check that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckFindFirstOrThrowArgs} args - Arguments to find a Check
     * @example
     * // Get one Check
     * const check = await prisma.check.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckClient<$Result.GetResult<Prisma.$CheckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Checks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Checks
     * const checks = await prisma.check.findMany()
     * 
     * // Get first 10 Checks
     * const checks = await prisma.check.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkWithIdOnly = await prisma.check.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CheckFindManyArgs>(args?: SelectSubset<T, CheckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Check.
     * @param {CheckCreateArgs} args - Arguments to create a Check.
     * @example
     * // Create one Check
     * const Check = await prisma.check.create({
     *   data: {
     *     // ... data to create a Check
     *   }
     * })
     * 
     */
    create<T extends CheckCreateArgs>(args: SelectSubset<T, CheckCreateArgs<ExtArgs>>): Prisma__CheckClient<$Result.GetResult<Prisma.$CheckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Checks.
     * @param {CheckCreateManyArgs} args - Arguments to create many Checks.
     * @example
     * // Create many Checks
     * const check = await prisma.check.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckCreateManyArgs>(args?: SelectSubset<T, CheckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Checks and returns the data saved in the database.
     * @param {CheckCreateManyAndReturnArgs} args - Arguments to create many Checks.
     * @example
     * // Create many Checks
     * const check = await prisma.check.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Checks and only return the `id`
     * const checkWithIdOnly = await prisma.check.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CheckCreateManyAndReturnArgs>(args?: SelectSubset<T, CheckCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Check.
     * @param {CheckDeleteArgs} args - Arguments to delete one Check.
     * @example
     * // Delete one Check
     * const Check = await prisma.check.delete({
     *   where: {
     *     // ... filter to delete one Check
     *   }
     * })
     * 
     */
    delete<T extends CheckDeleteArgs>(args: SelectSubset<T, CheckDeleteArgs<ExtArgs>>): Prisma__CheckClient<$Result.GetResult<Prisma.$CheckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Check.
     * @param {CheckUpdateArgs} args - Arguments to update one Check.
     * @example
     * // Update one Check
     * const check = await prisma.check.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckUpdateArgs>(args: SelectSubset<T, CheckUpdateArgs<ExtArgs>>): Prisma__CheckClient<$Result.GetResult<Prisma.$CheckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Checks.
     * @param {CheckDeleteManyArgs} args - Arguments to filter Checks to delete.
     * @example
     * // Delete a few Checks
     * const { count } = await prisma.check.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckDeleteManyArgs>(args?: SelectSubset<T, CheckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Checks
     * const check = await prisma.check.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckUpdateManyArgs>(args: SelectSubset<T, CheckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checks and returns the data updated in the database.
     * @param {CheckUpdateManyAndReturnArgs} args - Arguments to update many Checks.
     * @example
     * // Update many Checks
     * const check = await prisma.check.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Checks and only return the `id`
     * const checkWithIdOnly = await prisma.check.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CheckUpdateManyAndReturnArgs>(args: SelectSubset<T, CheckUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Check.
     * @param {CheckUpsertArgs} args - Arguments to update or create a Check.
     * @example
     * // Update or create a Check
     * const check = await prisma.check.upsert({
     *   create: {
     *     // ... data to create a Check
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Check we want to update
     *   }
     * })
     */
    upsert<T extends CheckUpsertArgs>(args: SelectSubset<T, CheckUpsertArgs<ExtArgs>>): Prisma__CheckClient<$Result.GetResult<Prisma.$CheckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Checks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckCountArgs} args - Arguments to filter Checks to count.
     * @example
     * // Count the number of Checks
     * const count = await prisma.check.count({
     *   where: {
     *     // ... the filter for the Checks we want to count
     *   }
     * })
    **/
    count<T extends CheckCountArgs>(
      args?: Subset<T, CheckCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Check.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CheckAggregateArgs>(args: Subset<T, CheckAggregateArgs>): Prisma.PrismaPromise<GetCheckAggregateType<T>>

    /**
     * Group by Check.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CheckGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckGroupByArgs['orderBy'] }
        : { orderBy?: CheckGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CheckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Check model
   */
  readonly fields: CheckFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Check.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    monitor<T extends MonitorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MonitorDefaultArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Check model
   */
  interface CheckFieldRefs {
    readonly id: FieldRef<"Check", 'String'>
    readonly monitorId: FieldRef<"Check", 'String'>
    readonly status: FieldRef<"Check", 'CheckStatus'>
    readonly statusCode: FieldRef<"Check", 'Int'>
    readonly responseTime: FieldRef<"Check", 'Int'>
    readonly error: FieldRef<"Check", 'String'>
    readonly checkedAt: FieldRef<"Check", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Check findUnique
   */
  export type CheckFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInclude<ExtArgs> | null
    /**
     * Filter, which Check to fetch.
     */
    where: CheckWhereUniqueInput
  }

  /**
   * Check findUniqueOrThrow
   */
  export type CheckFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInclude<ExtArgs> | null
    /**
     * Filter, which Check to fetch.
     */
    where: CheckWhereUniqueInput
  }

  /**
   * Check findFirst
   */
  export type CheckFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInclude<ExtArgs> | null
    /**
     * Filter, which Check to fetch.
     */
    where?: CheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checks to fetch.
     */
    orderBy?: CheckOrderByWithRelationInput | CheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checks.
     */
    cursor?: CheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checks.
     */
    distinct?: CheckScalarFieldEnum | CheckScalarFieldEnum[]
  }

  /**
   * Check findFirstOrThrow
   */
  export type CheckFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInclude<ExtArgs> | null
    /**
     * Filter, which Check to fetch.
     */
    where?: CheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checks to fetch.
     */
    orderBy?: CheckOrderByWithRelationInput | CheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checks.
     */
    cursor?: CheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checks.
     */
    distinct?: CheckScalarFieldEnum | CheckScalarFieldEnum[]
  }

  /**
   * Check findMany
   */
  export type CheckFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInclude<ExtArgs> | null
    /**
     * Filter, which Checks to fetch.
     */
    where?: CheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checks to fetch.
     */
    orderBy?: CheckOrderByWithRelationInput | CheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Checks.
     */
    cursor?: CheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checks.
     */
    skip?: number
    distinct?: CheckScalarFieldEnum | CheckScalarFieldEnum[]
  }

  /**
   * Check create
   */
  export type CheckCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInclude<ExtArgs> | null
    /**
     * The data needed to create a Check.
     */
    data: XOR<CheckCreateInput, CheckUncheckedCreateInput>
  }

  /**
   * Check createMany
   */
  export type CheckCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Checks.
     */
    data: CheckCreateManyInput | CheckCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Check createManyAndReturn
   */
  export type CheckCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * The data used to create many Checks.
     */
    data: CheckCreateManyInput | CheckCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Check update
   */
  export type CheckUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInclude<ExtArgs> | null
    /**
     * The data needed to update a Check.
     */
    data: XOR<CheckUpdateInput, CheckUncheckedUpdateInput>
    /**
     * Choose, which Check to update.
     */
    where: CheckWhereUniqueInput
  }

  /**
   * Check updateMany
   */
  export type CheckUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Checks.
     */
    data: XOR<CheckUpdateManyMutationInput, CheckUncheckedUpdateManyInput>
    /**
     * Filter which Checks to update
     */
    where?: CheckWhereInput
    /**
     * Limit how many Checks to update.
     */
    limit?: number
  }

  /**
   * Check updateManyAndReturn
   */
  export type CheckUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * The data used to update Checks.
     */
    data: XOR<CheckUpdateManyMutationInput, CheckUncheckedUpdateManyInput>
    /**
     * Filter which Checks to update
     */
    where?: CheckWhereInput
    /**
     * Limit how many Checks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Check upsert
   */
  export type CheckUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInclude<ExtArgs> | null
    /**
     * The filter to search for the Check to update in case it exists.
     */
    where: CheckWhereUniqueInput
    /**
     * In case the Check found by the `where` argument doesn't exist, create a new Check with this data.
     */
    create: XOR<CheckCreateInput, CheckUncheckedCreateInput>
    /**
     * In case the Check was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckUpdateInput, CheckUncheckedUpdateInput>
  }

  /**
   * Check delete
   */
  export type CheckDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInclude<ExtArgs> | null
    /**
     * Filter which Check to delete.
     */
    where: CheckWhereUniqueInput
  }

  /**
   * Check deleteMany
   */
  export type CheckDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checks to delete
     */
    where?: CheckWhereInput
    /**
     * Limit how many Checks to delete.
     */
    limit?: number
  }

  /**
   * Check without action
   */
  export type CheckDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Check
     */
    select?: CheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Check
     */
    omit?: CheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInclude<ExtArgs> | null
  }


  /**
   * Model Incident
   */

  export type AggregateIncident = {
    _count: IncidentCountAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  export type IncidentMinAggregateOutputType = {
    id: string | null
    monitorId: string | null
    startedAt: Date | null
    resolvedAt: Date | null
    status: string | null
  }

  export type IncidentMaxAggregateOutputType = {
    id: string | null
    monitorId: string | null
    startedAt: Date | null
    resolvedAt: Date | null
    status: string | null
  }

  export type IncidentCountAggregateOutputType = {
    id: number
    monitorId: number
    startedAt: number
    resolvedAt: number
    status: number
    checks: number
    _all: number
  }


  export type IncidentMinAggregateInputType = {
    id?: true
    monitorId?: true
    startedAt?: true
    resolvedAt?: true
    status?: true
  }

  export type IncidentMaxAggregateInputType = {
    id?: true
    monitorId?: true
    startedAt?: true
    resolvedAt?: true
    status?: true
  }

  export type IncidentCountAggregateInputType = {
    id?: true
    monitorId?: true
    startedAt?: true
    resolvedAt?: true
    status?: true
    checks?: true
    _all?: true
  }

  export type IncidentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incident to aggregate.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Incidents
    **/
    _count?: true | IncidentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentMaxAggregateInputType
  }

  export type GetIncidentAggregateType<T extends IncidentAggregateArgs> = {
        [P in keyof T & keyof AggregateIncident]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncident[P]>
      : GetScalarType<T[P], AggregateIncident[P]>
  }




  export type IncidentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithAggregationInput | IncidentOrderByWithAggregationInput[]
    by: IncidentScalarFieldEnum[] | IncidentScalarFieldEnum
    having?: IncidentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentCountAggregateInputType | true
    _min?: IncidentMinAggregateInputType
    _max?: IncidentMaxAggregateInputType
  }

  export type IncidentGroupByOutputType = {
    id: string
    monitorId: string
    startedAt: Date
    resolvedAt: Date | null
    status: string
    checks: string[]
    _count: IncidentCountAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  type GetIncidentGroupByPayload<T extends IncidentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentGroupByOutputType[P]>
        }
      >
    >


  export type IncidentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monitorId?: boolean
    startedAt?: boolean
    resolvedAt?: boolean
    status?: boolean
    checks?: boolean
    monitor?: boolean | MonitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monitorId?: boolean
    startedAt?: boolean
    resolvedAt?: boolean
    status?: boolean
    checks?: boolean
    monitor?: boolean | MonitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monitorId?: boolean
    startedAt?: boolean
    resolvedAt?: boolean
    status?: boolean
    checks?: boolean
    monitor?: boolean | MonitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectScalar = {
    id?: boolean
    monitorId?: boolean
    startedAt?: boolean
    resolvedAt?: boolean
    status?: boolean
    checks?: boolean
  }

  export type IncidentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "monitorId" | "startedAt" | "resolvedAt" | "status" | "checks", ExtArgs["result"]["incident"]>
  export type IncidentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monitor?: boolean | MonitorDefaultArgs<ExtArgs>
  }
  export type IncidentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monitor?: boolean | MonitorDefaultArgs<ExtArgs>
  }
  export type IncidentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monitor?: boolean | MonitorDefaultArgs<ExtArgs>
  }

  export type $IncidentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Incident"
    objects: {
      monitor: Prisma.$MonitorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      monitorId: string
      startedAt: Date
      resolvedAt: Date | null
      status: string
      checks: string[]
    }, ExtArgs["result"]["incident"]>
    composites: {}
  }

  type IncidentGetPayload<S extends boolean | null | undefined | IncidentDefaultArgs> = $Result.GetResult<Prisma.$IncidentPayload, S>

  type IncidentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentCountAggregateInputType | true
    }

  export interface IncidentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Incident'], meta: { name: 'Incident' } }
    /**
     * Find zero or one Incident that matches the filter.
     * @param {IncidentFindUniqueArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentFindUniqueArgs>(args: SelectSubset<T, IncidentFindUniqueArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Incident that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentFindUniqueOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentFindFirstArgs>(args?: SelectSubset<T, IncidentFindFirstArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incidents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incidents
     * const incidents = await prisma.incident.findMany()
     * 
     * // Get first 10 Incidents
     * const incidents = await prisma.incident.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentWithIdOnly = await prisma.incident.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentFindManyArgs>(args?: SelectSubset<T, IncidentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Incident.
     * @param {IncidentCreateArgs} args - Arguments to create a Incident.
     * @example
     * // Create one Incident
     * const Incident = await prisma.incident.create({
     *   data: {
     *     // ... data to create a Incident
     *   }
     * })
     * 
     */
    create<T extends IncidentCreateArgs>(args: SelectSubset<T, IncidentCreateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Incidents.
     * @param {IncidentCreateManyArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentCreateManyArgs>(args?: SelectSubset<T, IncidentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Incidents and returns the data saved in the database.
     * @param {IncidentCreateManyAndReturnArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Incidents and only return the `id`
     * const incidentWithIdOnly = await prisma.incident.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncidentCreateManyAndReturnArgs>(args?: SelectSubset<T, IncidentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Incident.
     * @param {IncidentDeleteArgs} args - Arguments to delete one Incident.
     * @example
     * // Delete one Incident
     * const Incident = await prisma.incident.delete({
     *   where: {
     *     // ... filter to delete one Incident
     *   }
     * })
     * 
     */
    delete<T extends IncidentDeleteArgs>(args: SelectSubset<T, IncidentDeleteArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Incident.
     * @param {IncidentUpdateArgs} args - Arguments to update one Incident.
     * @example
     * // Update one Incident
     * const incident = await prisma.incident.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentUpdateArgs>(args: SelectSubset<T, IncidentUpdateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Incidents.
     * @param {IncidentDeleteManyArgs} args - Arguments to filter Incidents to delete.
     * @example
     * // Delete a few Incidents
     * const { count } = await prisma.incident.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentDeleteManyArgs>(args?: SelectSubset<T, IncidentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentUpdateManyArgs>(args: SelectSubset<T, IncidentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents and returns the data updated in the database.
     * @param {IncidentUpdateManyAndReturnArgs} args - Arguments to update many Incidents.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Incidents and only return the `id`
     * const incidentWithIdOnly = await prisma.incident.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IncidentUpdateManyAndReturnArgs>(args: SelectSubset<T, IncidentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Incident.
     * @param {IncidentUpsertArgs} args - Arguments to update or create a Incident.
     * @example
     * // Update or create a Incident
     * const incident = await prisma.incident.upsert({
     *   create: {
     *     // ... data to create a Incident
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incident we want to update
     *   }
     * })
     */
    upsert<T extends IncidentUpsertArgs>(args: SelectSubset<T, IncidentUpsertArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentCountArgs} args - Arguments to filter Incidents to count.
     * @example
     * // Count the number of Incidents
     * const count = await prisma.incident.count({
     *   where: {
     *     // ... the filter for the Incidents we want to count
     *   }
     * })
    **/
    count<T extends IncidentCountArgs>(
      args?: Subset<T, IncidentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncidentAggregateArgs>(args: Subset<T, IncidentAggregateArgs>): Prisma.PrismaPromise<GetIncidentAggregateType<T>>

    /**
     * Group by Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IncidentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentGroupByArgs['orderBy'] }
        : { orderBy?: IncidentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IncidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Incident model
   */
  readonly fields: IncidentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Incident.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    monitor<T extends MonitorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MonitorDefaultArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Incident model
   */
  interface IncidentFieldRefs {
    readonly id: FieldRef<"Incident", 'String'>
    readonly monitorId: FieldRef<"Incident", 'String'>
    readonly startedAt: FieldRef<"Incident", 'DateTime'>
    readonly resolvedAt: FieldRef<"Incident", 'DateTime'>
    readonly status: FieldRef<"Incident", 'String'>
    readonly checks: FieldRef<"Incident", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Incident findUnique
   */
  export type IncidentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findUniqueOrThrow
   */
  export type IncidentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findFirst
   */
  export type IncidentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findFirstOrThrow
   */
  export type IncidentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findMany
   */
  export type IncidentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incidents to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident create
   */
  export type IncidentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to create a Incident.
     */
    data: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
  }

  /**
   * Incident createMany
   */
  export type IncidentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Incident createManyAndReturn
   */
  export type IncidentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Incident update
   */
  export type IncidentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to update a Incident.
     */
    data: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
    /**
     * Choose, which Incident to update.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident updateMany
   */
  export type IncidentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
  }

  /**
   * Incident updateManyAndReturn
   */
  export type IncidentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Incident upsert
   */
  export type IncidentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The filter to search for the Incident to update in case it exists.
     */
    where: IncidentWhereUniqueInput
    /**
     * In case the Incident found by the `where` argument doesn't exist, create a new Incident with this data.
     */
    create: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
    /**
     * In case the Incident was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
  }

  /**
   * Incident delete
   */
  export type IncidentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter which Incident to delete.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident deleteMany
   */
  export type IncidentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incidents to delete
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to delete.
     */
    limit?: number
  }

  /**
   * Incident without action
   */
  export type IncidentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MonitorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    interval: 'interval',
    isActive: 'isActive',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MonitorScalarFieldEnum = (typeof MonitorScalarFieldEnum)[keyof typeof MonitorScalarFieldEnum]


  export const CheckScalarFieldEnum: {
    id: 'id',
    monitorId: 'monitorId',
    status: 'status',
    statusCode: 'statusCode',
    responseTime: 'responseTime',
    error: 'error',
    checkedAt: 'checkedAt'
  };

  export type CheckScalarFieldEnum = (typeof CheckScalarFieldEnum)[keyof typeof CheckScalarFieldEnum]


  export const IncidentScalarFieldEnum: {
    id: 'id',
    monitorId: 'monitorId',
    startedAt: 'startedAt',
    resolvedAt: 'resolvedAt',
    status: 'status',
    checks: 'checks'
  };

  export type IncidentScalarFieldEnum = (typeof IncidentScalarFieldEnum)[keyof typeof IncidentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'CheckStatus'
   */
  export type EnumCheckStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CheckStatus'>
    


  /**
   * Reference to a field of type 'CheckStatus[]'
   */
  export type ListEnumCheckStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CheckStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    monitors?: MonitorListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    monitors?: MonitorOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    monitors?: MonitorListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MonitorWhereInput = {
    AND?: MonitorWhereInput | MonitorWhereInput[]
    OR?: MonitorWhereInput[]
    NOT?: MonitorWhereInput | MonitorWhereInput[]
    id?: StringFilter<"Monitor"> | string
    name?: StringFilter<"Monitor"> | string
    url?: StringFilter<"Monitor"> | string
    interval?: IntFilter<"Monitor"> | number
    isActive?: BoolFilter<"Monitor"> | boolean
    userId?: StringFilter<"Monitor"> | string
    createdAt?: DateTimeFilter<"Monitor"> | Date | string
    updatedAt?: DateTimeFilter<"Monitor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    checks?: CheckListRelationFilter
    incidents?: IncidentListRelationFilter
  }

  export type MonitorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    interval?: SortOrder
    isActive?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    checks?: CheckOrderByRelationAggregateInput
    incidents?: IncidentOrderByRelationAggregateInput
  }

  export type MonitorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MonitorWhereInput | MonitorWhereInput[]
    OR?: MonitorWhereInput[]
    NOT?: MonitorWhereInput | MonitorWhereInput[]
    name?: StringFilter<"Monitor"> | string
    url?: StringFilter<"Monitor"> | string
    interval?: IntFilter<"Monitor"> | number
    isActive?: BoolFilter<"Monitor"> | boolean
    userId?: StringFilter<"Monitor"> | string
    createdAt?: DateTimeFilter<"Monitor"> | Date | string
    updatedAt?: DateTimeFilter<"Monitor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    checks?: CheckListRelationFilter
    incidents?: IncidentListRelationFilter
  }, "id">

  export type MonitorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    interval?: SortOrder
    isActive?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MonitorCountOrderByAggregateInput
    _avg?: MonitorAvgOrderByAggregateInput
    _max?: MonitorMaxOrderByAggregateInput
    _min?: MonitorMinOrderByAggregateInput
    _sum?: MonitorSumOrderByAggregateInput
  }

  export type MonitorScalarWhereWithAggregatesInput = {
    AND?: MonitorScalarWhereWithAggregatesInput | MonitorScalarWhereWithAggregatesInput[]
    OR?: MonitorScalarWhereWithAggregatesInput[]
    NOT?: MonitorScalarWhereWithAggregatesInput | MonitorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Monitor"> | string
    name?: StringWithAggregatesFilter<"Monitor"> | string
    url?: StringWithAggregatesFilter<"Monitor"> | string
    interval?: IntWithAggregatesFilter<"Monitor"> | number
    isActive?: BoolWithAggregatesFilter<"Monitor"> | boolean
    userId?: StringWithAggregatesFilter<"Monitor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Monitor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Monitor"> | Date | string
  }

  export type CheckWhereInput = {
    AND?: CheckWhereInput | CheckWhereInput[]
    OR?: CheckWhereInput[]
    NOT?: CheckWhereInput | CheckWhereInput[]
    id?: StringFilter<"Check"> | string
    monitorId?: StringFilter<"Check"> | string
    status?: EnumCheckStatusFilter<"Check"> | $Enums.CheckStatus
    statusCode?: IntNullableFilter<"Check"> | number | null
    responseTime?: IntNullableFilter<"Check"> | number | null
    error?: StringNullableFilter<"Check"> | string | null
    checkedAt?: DateTimeFilter<"Check"> | Date | string
    monitor?: XOR<MonitorScalarRelationFilter, MonitorWhereInput>
  }

  export type CheckOrderByWithRelationInput = {
    id?: SortOrder
    monitorId?: SortOrder
    status?: SortOrder
    statusCode?: SortOrderInput | SortOrder
    responseTime?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    checkedAt?: SortOrder
    monitor?: MonitorOrderByWithRelationInput
  }

  export type CheckWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CheckWhereInput | CheckWhereInput[]
    OR?: CheckWhereInput[]
    NOT?: CheckWhereInput | CheckWhereInput[]
    monitorId?: StringFilter<"Check"> | string
    status?: EnumCheckStatusFilter<"Check"> | $Enums.CheckStatus
    statusCode?: IntNullableFilter<"Check"> | number | null
    responseTime?: IntNullableFilter<"Check"> | number | null
    error?: StringNullableFilter<"Check"> | string | null
    checkedAt?: DateTimeFilter<"Check"> | Date | string
    monitor?: XOR<MonitorScalarRelationFilter, MonitorWhereInput>
  }, "id">

  export type CheckOrderByWithAggregationInput = {
    id?: SortOrder
    monitorId?: SortOrder
    status?: SortOrder
    statusCode?: SortOrderInput | SortOrder
    responseTime?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    checkedAt?: SortOrder
    _count?: CheckCountOrderByAggregateInput
    _avg?: CheckAvgOrderByAggregateInput
    _max?: CheckMaxOrderByAggregateInput
    _min?: CheckMinOrderByAggregateInput
    _sum?: CheckSumOrderByAggregateInput
  }

  export type CheckScalarWhereWithAggregatesInput = {
    AND?: CheckScalarWhereWithAggregatesInput | CheckScalarWhereWithAggregatesInput[]
    OR?: CheckScalarWhereWithAggregatesInput[]
    NOT?: CheckScalarWhereWithAggregatesInput | CheckScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Check"> | string
    monitorId?: StringWithAggregatesFilter<"Check"> | string
    status?: EnumCheckStatusWithAggregatesFilter<"Check"> | $Enums.CheckStatus
    statusCode?: IntNullableWithAggregatesFilter<"Check"> | number | null
    responseTime?: IntNullableWithAggregatesFilter<"Check"> | number | null
    error?: StringNullableWithAggregatesFilter<"Check"> | string | null
    checkedAt?: DateTimeWithAggregatesFilter<"Check"> | Date | string
  }

  export type IncidentWhereInput = {
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    id?: StringFilter<"Incident"> | string
    monitorId?: StringFilter<"Incident"> | string
    startedAt?: DateTimeFilter<"Incident"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    status?: StringFilter<"Incident"> | string
    checks?: StringNullableListFilter<"Incident">
    monitor?: XOR<MonitorScalarRelationFilter, MonitorWhereInput>
  }

  export type IncidentOrderByWithRelationInput = {
    id?: SortOrder
    monitorId?: SortOrder
    startedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    checks?: SortOrder
    monitor?: MonitorOrderByWithRelationInput
  }

  export type IncidentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    monitorId?: StringFilter<"Incident"> | string
    startedAt?: DateTimeFilter<"Incident"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    status?: StringFilter<"Incident"> | string
    checks?: StringNullableListFilter<"Incident">
    monitor?: XOR<MonitorScalarRelationFilter, MonitorWhereInput>
  }, "id">

  export type IncidentOrderByWithAggregationInput = {
    id?: SortOrder
    monitorId?: SortOrder
    startedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    checks?: SortOrder
    _count?: IncidentCountOrderByAggregateInput
    _max?: IncidentMaxOrderByAggregateInput
    _min?: IncidentMinOrderByAggregateInput
  }

  export type IncidentScalarWhereWithAggregatesInput = {
    AND?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    OR?: IncidentScalarWhereWithAggregatesInput[]
    NOT?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Incident"> | string
    monitorId?: StringWithAggregatesFilter<"Incident"> | string
    startedAt?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Incident"> | Date | string | null
    status?: StringWithAggregatesFilter<"Incident"> | string
    checks?: StringNullableListFilter<"Incident">
  }

  export type UserCreateInput = {
    id: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    monitors?: MonitorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    monitors?: MonitorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monitors?: MonitorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monitors?: MonitorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitorCreateInput = {
    id?: string
    name: string
    url: string
    interval?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMonitorsInput
    checks?: CheckCreateNestedManyWithoutMonitorInput
    incidents?: IncidentCreateNestedManyWithoutMonitorInput
  }

  export type MonitorUncheckedCreateInput = {
    id?: string
    name: string
    url: string
    interval?: number
    isActive?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    checks?: CheckUncheckedCreateNestedManyWithoutMonitorInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutMonitorInput
  }

  export type MonitorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMonitorsNestedInput
    checks?: CheckUpdateManyWithoutMonitorNestedInput
    incidents?: IncidentUpdateManyWithoutMonitorNestedInput
  }

  export type MonitorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checks?: CheckUncheckedUpdateManyWithoutMonitorNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutMonitorNestedInput
  }

  export type MonitorCreateManyInput = {
    id?: string
    name: string
    url: string
    interval?: number
    isActive?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonitorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckCreateInput = {
    id?: string
    status: $Enums.CheckStatus
    statusCode?: number | null
    responseTime?: number | null
    error?: string | null
    checkedAt?: Date | string
    monitor: MonitorCreateNestedOneWithoutChecksInput
  }

  export type CheckUncheckedCreateInput = {
    id?: string
    monitorId: string
    status: $Enums.CheckStatus
    statusCode?: number | null
    responseTime?: number | null
    error?: string | null
    checkedAt?: Date | string
  }

  export type CheckUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    checkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monitor?: MonitorUpdateOneRequiredWithoutChecksNestedInput
  }

  export type CheckUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    monitorId?: StringFieldUpdateOperationsInput | string
    status?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    checkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckCreateManyInput = {
    id?: string
    monitorId: string
    status: $Enums.CheckStatus
    statusCode?: number | null
    responseTime?: number | null
    error?: string | null
    checkedAt?: Date | string
  }

  export type CheckUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    checkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    monitorId?: StringFieldUpdateOperationsInput | string
    status?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    checkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentCreateInput = {
    id?: string
    startedAt?: Date | string
    resolvedAt?: Date | string | null
    status: string
    checks?: IncidentCreatechecksInput | string[]
    monitor: MonitorCreateNestedOneWithoutIncidentsInput
  }

  export type IncidentUncheckedCreateInput = {
    id?: string
    monitorId: string
    startedAt?: Date | string
    resolvedAt?: Date | string | null
    status: string
    checks?: IncidentCreatechecksInput | string[]
  }

  export type IncidentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    checks?: IncidentUpdatechecksInput | string[]
    monitor?: MonitorUpdateOneRequiredWithoutIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    monitorId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    checks?: IncidentUpdatechecksInput | string[]
  }

  export type IncidentCreateManyInput = {
    id?: string
    monitorId: string
    startedAt?: Date | string
    resolvedAt?: Date | string | null
    status: string
    checks?: IncidentCreatechecksInput | string[]
  }

  export type IncidentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    checks?: IncidentUpdatechecksInput | string[]
  }

  export type IncidentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    monitorId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    checks?: IncidentUpdatechecksInput | string[]
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MonitorListRelationFilter = {
    every?: MonitorWhereInput
    some?: MonitorWhereInput
    none?: MonitorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MonitorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CheckListRelationFilter = {
    every?: CheckWhereInput
    some?: CheckWhereInput
    none?: CheckWhereInput
  }

  export type IncidentListRelationFilter = {
    every?: IncidentWhereInput
    some?: IncidentWhereInput
    none?: IncidentWhereInput
  }

  export type CheckOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncidentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MonitorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    interval?: SortOrder
    isActive?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonitorAvgOrderByAggregateInput = {
    interval?: SortOrder
  }

  export type MonitorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    interval?: SortOrder
    isActive?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonitorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    interval?: SortOrder
    isActive?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonitorSumOrderByAggregateInput = {
    interval?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumCheckStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckStatus | EnumCheckStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CheckStatus[] | ListEnumCheckStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckStatus[] | ListEnumCheckStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckStatusFilter<$PrismaModel> | $Enums.CheckStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MonitorScalarRelationFilter = {
    is?: MonitorWhereInput
    isNot?: MonitorWhereInput
  }

  export type CheckCountOrderByAggregateInput = {
    id?: SortOrder
    monitorId?: SortOrder
    status?: SortOrder
    statusCode?: SortOrder
    responseTime?: SortOrder
    error?: SortOrder
    checkedAt?: SortOrder
  }

  export type CheckAvgOrderByAggregateInput = {
    statusCode?: SortOrder
    responseTime?: SortOrder
  }

  export type CheckMaxOrderByAggregateInput = {
    id?: SortOrder
    monitorId?: SortOrder
    status?: SortOrder
    statusCode?: SortOrder
    responseTime?: SortOrder
    error?: SortOrder
    checkedAt?: SortOrder
  }

  export type CheckMinOrderByAggregateInput = {
    id?: SortOrder
    monitorId?: SortOrder
    status?: SortOrder
    statusCode?: SortOrder
    responseTime?: SortOrder
    error?: SortOrder
    checkedAt?: SortOrder
  }

  export type CheckSumOrderByAggregateInput = {
    statusCode?: SortOrder
    responseTime?: SortOrder
  }

  export type EnumCheckStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckStatus | EnumCheckStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CheckStatus[] | ListEnumCheckStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckStatus[] | ListEnumCheckStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckStatusWithAggregatesFilter<$PrismaModel> | $Enums.CheckStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCheckStatusFilter<$PrismaModel>
    _max?: NestedEnumCheckStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IncidentCountOrderByAggregateInput = {
    id?: SortOrder
    monitorId?: SortOrder
    startedAt?: SortOrder
    resolvedAt?: SortOrder
    status?: SortOrder
    checks?: SortOrder
  }

  export type IncidentMaxOrderByAggregateInput = {
    id?: SortOrder
    monitorId?: SortOrder
    startedAt?: SortOrder
    resolvedAt?: SortOrder
    status?: SortOrder
  }

  export type IncidentMinOrderByAggregateInput = {
    id?: SortOrder
    monitorId?: SortOrder
    startedAt?: SortOrder
    resolvedAt?: SortOrder
    status?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MonitorCreateNestedManyWithoutUserInput = {
    create?: XOR<MonitorCreateWithoutUserInput, MonitorUncheckedCreateWithoutUserInput> | MonitorCreateWithoutUserInput[] | MonitorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MonitorCreateOrConnectWithoutUserInput | MonitorCreateOrConnectWithoutUserInput[]
    createMany?: MonitorCreateManyUserInputEnvelope
    connect?: MonitorWhereUniqueInput | MonitorWhereUniqueInput[]
  }

  export type MonitorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MonitorCreateWithoutUserInput, MonitorUncheckedCreateWithoutUserInput> | MonitorCreateWithoutUserInput[] | MonitorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MonitorCreateOrConnectWithoutUserInput | MonitorCreateOrConnectWithoutUserInput[]
    createMany?: MonitorCreateManyUserInputEnvelope
    connect?: MonitorWhereUniqueInput | MonitorWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MonitorUpdateManyWithoutUserNestedInput = {
    create?: XOR<MonitorCreateWithoutUserInput, MonitorUncheckedCreateWithoutUserInput> | MonitorCreateWithoutUserInput[] | MonitorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MonitorCreateOrConnectWithoutUserInput | MonitorCreateOrConnectWithoutUserInput[]
    upsert?: MonitorUpsertWithWhereUniqueWithoutUserInput | MonitorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MonitorCreateManyUserInputEnvelope
    set?: MonitorWhereUniqueInput | MonitorWhereUniqueInput[]
    disconnect?: MonitorWhereUniqueInput | MonitorWhereUniqueInput[]
    delete?: MonitorWhereUniqueInput | MonitorWhereUniqueInput[]
    connect?: MonitorWhereUniqueInput | MonitorWhereUniqueInput[]
    update?: MonitorUpdateWithWhereUniqueWithoutUserInput | MonitorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MonitorUpdateManyWithWhereWithoutUserInput | MonitorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MonitorScalarWhereInput | MonitorScalarWhereInput[]
  }

  export type MonitorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MonitorCreateWithoutUserInput, MonitorUncheckedCreateWithoutUserInput> | MonitorCreateWithoutUserInput[] | MonitorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MonitorCreateOrConnectWithoutUserInput | MonitorCreateOrConnectWithoutUserInput[]
    upsert?: MonitorUpsertWithWhereUniqueWithoutUserInput | MonitorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MonitorCreateManyUserInputEnvelope
    set?: MonitorWhereUniqueInput | MonitorWhereUniqueInput[]
    disconnect?: MonitorWhereUniqueInput | MonitorWhereUniqueInput[]
    delete?: MonitorWhereUniqueInput | MonitorWhereUniqueInput[]
    connect?: MonitorWhereUniqueInput | MonitorWhereUniqueInput[]
    update?: MonitorUpdateWithWhereUniqueWithoutUserInput | MonitorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MonitorUpdateManyWithWhereWithoutUserInput | MonitorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MonitorScalarWhereInput | MonitorScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMonitorsInput = {
    create?: XOR<UserCreateWithoutMonitorsInput, UserUncheckedCreateWithoutMonitorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMonitorsInput
    connect?: UserWhereUniqueInput
  }

  export type CheckCreateNestedManyWithoutMonitorInput = {
    create?: XOR<CheckCreateWithoutMonitorInput, CheckUncheckedCreateWithoutMonitorInput> | CheckCreateWithoutMonitorInput[] | CheckUncheckedCreateWithoutMonitorInput[]
    connectOrCreate?: CheckCreateOrConnectWithoutMonitorInput | CheckCreateOrConnectWithoutMonitorInput[]
    createMany?: CheckCreateManyMonitorInputEnvelope
    connect?: CheckWhereUniqueInput | CheckWhereUniqueInput[]
  }

  export type IncidentCreateNestedManyWithoutMonitorInput = {
    create?: XOR<IncidentCreateWithoutMonitorInput, IncidentUncheckedCreateWithoutMonitorInput> | IncidentCreateWithoutMonitorInput[] | IncidentUncheckedCreateWithoutMonitorInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutMonitorInput | IncidentCreateOrConnectWithoutMonitorInput[]
    createMany?: IncidentCreateManyMonitorInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type CheckUncheckedCreateNestedManyWithoutMonitorInput = {
    create?: XOR<CheckCreateWithoutMonitorInput, CheckUncheckedCreateWithoutMonitorInput> | CheckCreateWithoutMonitorInput[] | CheckUncheckedCreateWithoutMonitorInput[]
    connectOrCreate?: CheckCreateOrConnectWithoutMonitorInput | CheckCreateOrConnectWithoutMonitorInput[]
    createMany?: CheckCreateManyMonitorInputEnvelope
    connect?: CheckWhereUniqueInput | CheckWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutMonitorInput = {
    create?: XOR<IncidentCreateWithoutMonitorInput, IncidentUncheckedCreateWithoutMonitorInput> | IncidentCreateWithoutMonitorInput[] | IncidentUncheckedCreateWithoutMonitorInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutMonitorInput | IncidentCreateOrConnectWithoutMonitorInput[]
    createMany?: IncidentCreateManyMonitorInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutMonitorsNestedInput = {
    create?: XOR<UserCreateWithoutMonitorsInput, UserUncheckedCreateWithoutMonitorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMonitorsInput
    upsert?: UserUpsertWithoutMonitorsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMonitorsInput, UserUpdateWithoutMonitorsInput>, UserUncheckedUpdateWithoutMonitorsInput>
  }

  export type CheckUpdateManyWithoutMonitorNestedInput = {
    create?: XOR<CheckCreateWithoutMonitorInput, CheckUncheckedCreateWithoutMonitorInput> | CheckCreateWithoutMonitorInput[] | CheckUncheckedCreateWithoutMonitorInput[]
    connectOrCreate?: CheckCreateOrConnectWithoutMonitorInput | CheckCreateOrConnectWithoutMonitorInput[]
    upsert?: CheckUpsertWithWhereUniqueWithoutMonitorInput | CheckUpsertWithWhereUniqueWithoutMonitorInput[]
    createMany?: CheckCreateManyMonitorInputEnvelope
    set?: CheckWhereUniqueInput | CheckWhereUniqueInput[]
    disconnect?: CheckWhereUniqueInput | CheckWhereUniqueInput[]
    delete?: CheckWhereUniqueInput | CheckWhereUniqueInput[]
    connect?: CheckWhereUniqueInput | CheckWhereUniqueInput[]
    update?: CheckUpdateWithWhereUniqueWithoutMonitorInput | CheckUpdateWithWhereUniqueWithoutMonitorInput[]
    updateMany?: CheckUpdateManyWithWhereWithoutMonitorInput | CheckUpdateManyWithWhereWithoutMonitorInput[]
    deleteMany?: CheckScalarWhereInput | CheckScalarWhereInput[]
  }

  export type IncidentUpdateManyWithoutMonitorNestedInput = {
    create?: XOR<IncidentCreateWithoutMonitorInput, IncidentUncheckedCreateWithoutMonitorInput> | IncidentCreateWithoutMonitorInput[] | IncidentUncheckedCreateWithoutMonitorInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutMonitorInput | IncidentCreateOrConnectWithoutMonitorInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutMonitorInput | IncidentUpsertWithWhereUniqueWithoutMonitorInput[]
    createMany?: IncidentCreateManyMonitorInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutMonitorInput | IncidentUpdateWithWhereUniqueWithoutMonitorInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutMonitorInput | IncidentUpdateManyWithWhereWithoutMonitorInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type CheckUncheckedUpdateManyWithoutMonitorNestedInput = {
    create?: XOR<CheckCreateWithoutMonitorInput, CheckUncheckedCreateWithoutMonitorInput> | CheckCreateWithoutMonitorInput[] | CheckUncheckedCreateWithoutMonitorInput[]
    connectOrCreate?: CheckCreateOrConnectWithoutMonitorInput | CheckCreateOrConnectWithoutMonitorInput[]
    upsert?: CheckUpsertWithWhereUniqueWithoutMonitorInput | CheckUpsertWithWhereUniqueWithoutMonitorInput[]
    createMany?: CheckCreateManyMonitorInputEnvelope
    set?: CheckWhereUniqueInput | CheckWhereUniqueInput[]
    disconnect?: CheckWhereUniqueInput | CheckWhereUniqueInput[]
    delete?: CheckWhereUniqueInput | CheckWhereUniqueInput[]
    connect?: CheckWhereUniqueInput | CheckWhereUniqueInput[]
    update?: CheckUpdateWithWhereUniqueWithoutMonitorInput | CheckUpdateWithWhereUniqueWithoutMonitorInput[]
    updateMany?: CheckUpdateManyWithWhereWithoutMonitorInput | CheckUpdateManyWithWhereWithoutMonitorInput[]
    deleteMany?: CheckScalarWhereInput | CheckScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutMonitorNestedInput = {
    create?: XOR<IncidentCreateWithoutMonitorInput, IncidentUncheckedCreateWithoutMonitorInput> | IncidentCreateWithoutMonitorInput[] | IncidentUncheckedCreateWithoutMonitorInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutMonitorInput | IncidentCreateOrConnectWithoutMonitorInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutMonitorInput | IncidentUpsertWithWhereUniqueWithoutMonitorInput[]
    createMany?: IncidentCreateManyMonitorInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutMonitorInput | IncidentUpdateWithWhereUniqueWithoutMonitorInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutMonitorInput | IncidentUpdateManyWithWhereWithoutMonitorInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type MonitorCreateNestedOneWithoutChecksInput = {
    create?: XOR<MonitorCreateWithoutChecksInput, MonitorUncheckedCreateWithoutChecksInput>
    connectOrCreate?: MonitorCreateOrConnectWithoutChecksInput
    connect?: MonitorWhereUniqueInput
  }

  export type EnumCheckStatusFieldUpdateOperationsInput = {
    set?: $Enums.CheckStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MonitorUpdateOneRequiredWithoutChecksNestedInput = {
    create?: XOR<MonitorCreateWithoutChecksInput, MonitorUncheckedCreateWithoutChecksInput>
    connectOrCreate?: MonitorCreateOrConnectWithoutChecksInput
    upsert?: MonitorUpsertWithoutChecksInput
    connect?: MonitorWhereUniqueInput
    update?: XOR<XOR<MonitorUpdateToOneWithWhereWithoutChecksInput, MonitorUpdateWithoutChecksInput>, MonitorUncheckedUpdateWithoutChecksInput>
  }

  export type IncidentCreatechecksInput = {
    set: string[]
  }

  export type MonitorCreateNestedOneWithoutIncidentsInput = {
    create?: XOR<MonitorCreateWithoutIncidentsInput, MonitorUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: MonitorCreateOrConnectWithoutIncidentsInput
    connect?: MonitorWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IncidentUpdatechecksInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MonitorUpdateOneRequiredWithoutIncidentsNestedInput = {
    create?: XOR<MonitorCreateWithoutIncidentsInput, MonitorUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: MonitorCreateOrConnectWithoutIncidentsInput
    upsert?: MonitorUpsertWithoutIncidentsInput
    connect?: MonitorWhereUniqueInput
    update?: XOR<XOR<MonitorUpdateToOneWithWhereWithoutIncidentsInput, MonitorUpdateWithoutIncidentsInput>, MonitorUncheckedUpdateWithoutIncidentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumCheckStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckStatus | EnumCheckStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CheckStatus[] | ListEnumCheckStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckStatus[] | ListEnumCheckStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckStatusFilter<$PrismaModel> | $Enums.CheckStatus
  }

  export type NestedEnumCheckStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckStatus | EnumCheckStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CheckStatus[] | ListEnumCheckStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckStatus[] | ListEnumCheckStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckStatusWithAggregatesFilter<$PrismaModel> | $Enums.CheckStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCheckStatusFilter<$PrismaModel>
    _max?: NestedEnumCheckStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MonitorCreateWithoutUserInput = {
    id?: string
    name: string
    url: string
    interval?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    checks?: CheckCreateNestedManyWithoutMonitorInput
    incidents?: IncidentCreateNestedManyWithoutMonitorInput
  }

  export type MonitorUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    url: string
    interval?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    checks?: CheckUncheckedCreateNestedManyWithoutMonitorInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutMonitorInput
  }

  export type MonitorCreateOrConnectWithoutUserInput = {
    where: MonitorWhereUniqueInput
    create: XOR<MonitorCreateWithoutUserInput, MonitorUncheckedCreateWithoutUserInput>
  }

  export type MonitorCreateManyUserInputEnvelope = {
    data: MonitorCreateManyUserInput | MonitorCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MonitorUpsertWithWhereUniqueWithoutUserInput = {
    where: MonitorWhereUniqueInput
    update: XOR<MonitorUpdateWithoutUserInput, MonitorUncheckedUpdateWithoutUserInput>
    create: XOR<MonitorCreateWithoutUserInput, MonitorUncheckedCreateWithoutUserInput>
  }

  export type MonitorUpdateWithWhereUniqueWithoutUserInput = {
    where: MonitorWhereUniqueInput
    data: XOR<MonitorUpdateWithoutUserInput, MonitorUncheckedUpdateWithoutUserInput>
  }

  export type MonitorUpdateManyWithWhereWithoutUserInput = {
    where: MonitorScalarWhereInput
    data: XOR<MonitorUpdateManyMutationInput, MonitorUncheckedUpdateManyWithoutUserInput>
  }

  export type MonitorScalarWhereInput = {
    AND?: MonitorScalarWhereInput | MonitorScalarWhereInput[]
    OR?: MonitorScalarWhereInput[]
    NOT?: MonitorScalarWhereInput | MonitorScalarWhereInput[]
    id?: StringFilter<"Monitor"> | string
    name?: StringFilter<"Monitor"> | string
    url?: StringFilter<"Monitor"> | string
    interval?: IntFilter<"Monitor"> | number
    isActive?: BoolFilter<"Monitor"> | boolean
    userId?: StringFilter<"Monitor"> | string
    createdAt?: DateTimeFilter<"Monitor"> | Date | string
    updatedAt?: DateTimeFilter<"Monitor"> | Date | string
  }

  export type UserCreateWithoutMonitorsInput = {
    id: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutMonitorsInput = {
    id: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutMonitorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMonitorsInput, UserUncheckedCreateWithoutMonitorsInput>
  }

  export type CheckCreateWithoutMonitorInput = {
    id?: string
    status: $Enums.CheckStatus
    statusCode?: number | null
    responseTime?: number | null
    error?: string | null
    checkedAt?: Date | string
  }

  export type CheckUncheckedCreateWithoutMonitorInput = {
    id?: string
    status: $Enums.CheckStatus
    statusCode?: number | null
    responseTime?: number | null
    error?: string | null
    checkedAt?: Date | string
  }

  export type CheckCreateOrConnectWithoutMonitorInput = {
    where: CheckWhereUniqueInput
    create: XOR<CheckCreateWithoutMonitorInput, CheckUncheckedCreateWithoutMonitorInput>
  }

  export type CheckCreateManyMonitorInputEnvelope = {
    data: CheckCreateManyMonitorInput | CheckCreateManyMonitorInput[]
    skipDuplicates?: boolean
  }

  export type IncidentCreateWithoutMonitorInput = {
    id?: string
    startedAt?: Date | string
    resolvedAt?: Date | string | null
    status: string
    checks?: IncidentCreatechecksInput | string[]
  }

  export type IncidentUncheckedCreateWithoutMonitorInput = {
    id?: string
    startedAt?: Date | string
    resolvedAt?: Date | string | null
    status: string
    checks?: IncidentCreatechecksInput | string[]
  }

  export type IncidentCreateOrConnectWithoutMonitorInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutMonitorInput, IncidentUncheckedCreateWithoutMonitorInput>
  }

  export type IncidentCreateManyMonitorInputEnvelope = {
    data: IncidentCreateManyMonitorInput | IncidentCreateManyMonitorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMonitorsInput = {
    update: XOR<UserUpdateWithoutMonitorsInput, UserUncheckedUpdateWithoutMonitorsInput>
    create: XOR<UserCreateWithoutMonitorsInput, UserUncheckedCreateWithoutMonitorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMonitorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMonitorsInput, UserUncheckedUpdateWithoutMonitorsInput>
  }

  export type UserUpdateWithoutMonitorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutMonitorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckUpsertWithWhereUniqueWithoutMonitorInput = {
    where: CheckWhereUniqueInput
    update: XOR<CheckUpdateWithoutMonitorInput, CheckUncheckedUpdateWithoutMonitorInput>
    create: XOR<CheckCreateWithoutMonitorInput, CheckUncheckedCreateWithoutMonitorInput>
  }

  export type CheckUpdateWithWhereUniqueWithoutMonitorInput = {
    where: CheckWhereUniqueInput
    data: XOR<CheckUpdateWithoutMonitorInput, CheckUncheckedUpdateWithoutMonitorInput>
  }

  export type CheckUpdateManyWithWhereWithoutMonitorInput = {
    where: CheckScalarWhereInput
    data: XOR<CheckUpdateManyMutationInput, CheckUncheckedUpdateManyWithoutMonitorInput>
  }

  export type CheckScalarWhereInput = {
    AND?: CheckScalarWhereInput | CheckScalarWhereInput[]
    OR?: CheckScalarWhereInput[]
    NOT?: CheckScalarWhereInput | CheckScalarWhereInput[]
    id?: StringFilter<"Check"> | string
    monitorId?: StringFilter<"Check"> | string
    status?: EnumCheckStatusFilter<"Check"> | $Enums.CheckStatus
    statusCode?: IntNullableFilter<"Check"> | number | null
    responseTime?: IntNullableFilter<"Check"> | number | null
    error?: StringNullableFilter<"Check"> | string | null
    checkedAt?: DateTimeFilter<"Check"> | Date | string
  }

  export type IncidentUpsertWithWhereUniqueWithoutMonitorInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutMonitorInput, IncidentUncheckedUpdateWithoutMonitorInput>
    create: XOR<IncidentCreateWithoutMonitorInput, IncidentUncheckedCreateWithoutMonitorInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutMonitorInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutMonitorInput, IncidentUncheckedUpdateWithoutMonitorInput>
  }

  export type IncidentUpdateManyWithWhereWithoutMonitorInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutMonitorInput>
  }

  export type IncidentScalarWhereInput = {
    AND?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    OR?: IncidentScalarWhereInput[]
    NOT?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    id?: StringFilter<"Incident"> | string
    monitorId?: StringFilter<"Incident"> | string
    startedAt?: DateTimeFilter<"Incident"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    status?: StringFilter<"Incident"> | string
    checks?: StringNullableListFilter<"Incident">
  }

  export type MonitorCreateWithoutChecksInput = {
    id?: string
    name: string
    url: string
    interval?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMonitorsInput
    incidents?: IncidentCreateNestedManyWithoutMonitorInput
  }

  export type MonitorUncheckedCreateWithoutChecksInput = {
    id?: string
    name: string
    url: string
    interval?: number
    isActive?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    incidents?: IncidentUncheckedCreateNestedManyWithoutMonitorInput
  }

  export type MonitorCreateOrConnectWithoutChecksInput = {
    where: MonitorWhereUniqueInput
    create: XOR<MonitorCreateWithoutChecksInput, MonitorUncheckedCreateWithoutChecksInput>
  }

  export type MonitorUpsertWithoutChecksInput = {
    update: XOR<MonitorUpdateWithoutChecksInput, MonitorUncheckedUpdateWithoutChecksInput>
    create: XOR<MonitorCreateWithoutChecksInput, MonitorUncheckedCreateWithoutChecksInput>
    where?: MonitorWhereInput
  }

  export type MonitorUpdateToOneWithWhereWithoutChecksInput = {
    where?: MonitorWhereInput
    data: XOR<MonitorUpdateWithoutChecksInput, MonitorUncheckedUpdateWithoutChecksInput>
  }

  export type MonitorUpdateWithoutChecksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMonitorsNestedInput
    incidents?: IncidentUpdateManyWithoutMonitorNestedInput
  }

  export type MonitorUncheckedUpdateWithoutChecksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUncheckedUpdateManyWithoutMonitorNestedInput
  }

  export type MonitorCreateWithoutIncidentsInput = {
    id?: string
    name: string
    url: string
    interval?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMonitorsInput
    checks?: CheckCreateNestedManyWithoutMonitorInput
  }

  export type MonitorUncheckedCreateWithoutIncidentsInput = {
    id?: string
    name: string
    url: string
    interval?: number
    isActive?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    checks?: CheckUncheckedCreateNestedManyWithoutMonitorInput
  }

  export type MonitorCreateOrConnectWithoutIncidentsInput = {
    where: MonitorWhereUniqueInput
    create: XOR<MonitorCreateWithoutIncidentsInput, MonitorUncheckedCreateWithoutIncidentsInput>
  }

  export type MonitorUpsertWithoutIncidentsInput = {
    update: XOR<MonitorUpdateWithoutIncidentsInput, MonitorUncheckedUpdateWithoutIncidentsInput>
    create: XOR<MonitorCreateWithoutIncidentsInput, MonitorUncheckedCreateWithoutIncidentsInput>
    where?: MonitorWhereInput
  }

  export type MonitorUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: MonitorWhereInput
    data: XOR<MonitorUpdateWithoutIncidentsInput, MonitorUncheckedUpdateWithoutIncidentsInput>
  }

  export type MonitorUpdateWithoutIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMonitorsNestedInput
    checks?: CheckUpdateManyWithoutMonitorNestedInput
  }

  export type MonitorUncheckedUpdateWithoutIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checks?: CheckUncheckedUpdateManyWithoutMonitorNestedInput
  }

  export type MonitorCreateManyUserInput = {
    id?: string
    name: string
    url: string
    interval?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonitorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checks?: CheckUpdateManyWithoutMonitorNestedInput
    incidents?: IncidentUpdateManyWithoutMonitorNestedInput
  }

  export type MonitorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checks?: CheckUncheckedUpdateManyWithoutMonitorNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutMonitorNestedInput
  }

  export type MonitorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckCreateManyMonitorInput = {
    id?: string
    status: $Enums.CheckStatus
    statusCode?: number | null
    responseTime?: number | null
    error?: string | null
    checkedAt?: Date | string
  }

  export type IncidentCreateManyMonitorInput = {
    id?: string
    startedAt?: Date | string
    resolvedAt?: Date | string | null
    status: string
    checks?: IncidentCreatechecksInput | string[]
  }

  export type CheckUpdateWithoutMonitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    checkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckUncheckedUpdateWithoutMonitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    checkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckUncheckedUpdateManyWithoutMonitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    checkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateWithoutMonitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    checks?: IncidentUpdatechecksInput | string[]
  }

  export type IncidentUncheckedUpdateWithoutMonitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    checks?: IncidentUpdatechecksInput | string[]
  }

  export type IncidentUncheckedUpdateManyWithoutMonitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    checks?: IncidentUpdatechecksInput | string[]
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}