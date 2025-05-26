
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
 * Model Timer
 * 
 */
export type Timer = $Result.DefaultSelection<Prisma.$TimerPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Timers
 * const timers = await prisma.timer.findMany()
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
   * // Fetch zero or more Timers
   * const timers = await prisma.timer.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.timer`: Exposes CRUD operations for the **Timer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Timers
    * const timers = await prisma.timer.findMany()
    * ```
    */
  get timer(): Prisma.TimerDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Timer: 'Timer'
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
      modelProps: "timer"
      txIsolationLevel: never
    }
    model: {
      Timer: {
        payload: Prisma.$TimerPayload<ExtArgs>
        fields: Prisma.TimerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimerPayload>
          }
          findFirst: {
            args: Prisma.TimerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimerPayload>
          }
          findMany: {
            args: Prisma.TimerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimerPayload>[]
          }
          create: {
            args: Prisma.TimerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimerPayload>
          }
          createMany: {
            args: Prisma.TimerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TimerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimerPayload>
          }
          update: {
            args: Prisma.TimerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimerPayload>
          }
          deleteMany: {
            args: Prisma.TimerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TimerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimerPayload>
          }
          aggregate: {
            args: Prisma.TimerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimer>
          }
          groupBy: {
            args: Prisma.TimerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TimerFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TimerAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TimerCountArgs<ExtArgs>
            result: $Utils.Optional<TimerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    timer?: TimerOmit
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
   * Models
   */

  /**
   * Model Timer
   */

  export type AggregateTimer = {
    _count: TimerCountAggregateOutputType | null
    _avg: TimerAvgAggregateOutputType | null
    _sum: TimerSumAggregateOutputType | null
    _min: TimerMinAggregateOutputType | null
    _max: TimerMaxAggregateOutputType | null
  }

  export type TimerAvgAggregateOutputType = {
    currentTime: number | null
  }

  export type TimerSumAggregateOutputType = {
    currentTime: number | null
  }

  export type TimerMinAggregateOutputType = {
    id: string | null
    timerName: string | null
    currentTime: number | null
    timerId: string | null
    timerStartDate: string | null
    timerStartTime: string | null
    timerEndDate: string | null
    timerEndTime: string | null
    isPaused: boolean | null
    isActive: boolean | null
    isSet: boolean | null
    isRunning: boolean | null
    isStopped: boolean | null
    isReset: boolean | null
    isStarted: boolean | null
    isFinished: boolean | null
    isCompleted: boolean | null
  }

  export type TimerMaxAggregateOutputType = {
    id: string | null
    timerName: string | null
    currentTime: number | null
    timerId: string | null
    timerStartDate: string | null
    timerStartTime: string | null
    timerEndDate: string | null
    timerEndTime: string | null
    isPaused: boolean | null
    isActive: boolean | null
    isSet: boolean | null
    isRunning: boolean | null
    isStopped: boolean | null
    isReset: boolean | null
    isStarted: boolean | null
    isFinished: boolean | null
    isCompleted: boolean | null
  }

  export type TimerCountAggregateOutputType = {
    id: number
    timerName: number
    currentTime: number
    timerId: number
    timerEventList: number
    timerTriggerList: number
    timerStartDate: number
    timerStartTime: number
    timerEndDate: number
    timerEndTime: number
    isPaused: number
    isActive: number
    isSet: number
    isRunning: number
    isStopped: number
    isReset: number
    isStarted: number
    isFinished: number
    isCompleted: number
    _all: number
  }


  export type TimerAvgAggregateInputType = {
    currentTime?: true
  }

  export type TimerSumAggregateInputType = {
    currentTime?: true
  }

  export type TimerMinAggregateInputType = {
    id?: true
    timerName?: true
    currentTime?: true
    timerId?: true
    timerStartDate?: true
    timerStartTime?: true
    timerEndDate?: true
    timerEndTime?: true
    isPaused?: true
    isActive?: true
    isSet?: true
    isRunning?: true
    isStopped?: true
    isReset?: true
    isStarted?: true
    isFinished?: true
    isCompleted?: true
  }

  export type TimerMaxAggregateInputType = {
    id?: true
    timerName?: true
    currentTime?: true
    timerId?: true
    timerStartDate?: true
    timerStartTime?: true
    timerEndDate?: true
    timerEndTime?: true
    isPaused?: true
    isActive?: true
    isSet?: true
    isRunning?: true
    isStopped?: true
    isReset?: true
    isStarted?: true
    isFinished?: true
    isCompleted?: true
  }

  export type TimerCountAggregateInputType = {
    id?: true
    timerName?: true
    currentTime?: true
    timerId?: true
    timerEventList?: true
    timerTriggerList?: true
    timerStartDate?: true
    timerStartTime?: true
    timerEndDate?: true
    timerEndTime?: true
    isPaused?: true
    isActive?: true
    isSet?: true
    isRunning?: true
    isStopped?: true
    isReset?: true
    isStarted?: true
    isFinished?: true
    isCompleted?: true
    _all?: true
  }

  export type TimerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timer to aggregate.
     */
    where?: TimerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timers to fetch.
     */
    orderBy?: TimerOrderByWithRelationInput | TimerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Timers
    **/
    _count?: true | TimerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimerMaxAggregateInputType
  }

  export type GetTimerAggregateType<T extends TimerAggregateArgs> = {
        [P in keyof T & keyof AggregateTimer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimer[P]>
      : GetScalarType<T[P], AggregateTimer[P]>
  }




  export type TimerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimerWhereInput
    orderBy?: TimerOrderByWithAggregationInput | TimerOrderByWithAggregationInput[]
    by: TimerScalarFieldEnum[] | TimerScalarFieldEnum
    having?: TimerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimerCountAggregateInputType | true
    _avg?: TimerAvgAggregateInputType
    _sum?: TimerSumAggregateInputType
    _min?: TimerMinAggregateInputType
    _max?: TimerMaxAggregateInputType
  }

  export type TimerGroupByOutputType = {
    id: string
    timerName: string
    currentTime: number
    timerId: string
    timerEventList: string[]
    timerTriggerList: string[]
    timerStartDate: string
    timerStartTime: string
    timerEndDate: string
    timerEndTime: string
    isPaused: boolean
    isActive: boolean
    isSet: boolean
    isRunning: boolean
    isStopped: boolean
    isReset: boolean
    isStarted: boolean
    isFinished: boolean
    isCompleted: boolean
    _count: TimerCountAggregateOutputType | null
    _avg: TimerAvgAggregateOutputType | null
    _sum: TimerSumAggregateOutputType | null
    _min: TimerMinAggregateOutputType | null
    _max: TimerMaxAggregateOutputType | null
  }

  type GetTimerGroupByPayload<T extends TimerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimerGroupByOutputType[P]>
            : GetScalarType<T[P], TimerGroupByOutputType[P]>
        }
      >
    >


  export type TimerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timerName?: boolean
    currentTime?: boolean
    timerId?: boolean
    timerEventList?: boolean
    timerTriggerList?: boolean
    timerStartDate?: boolean
    timerStartTime?: boolean
    timerEndDate?: boolean
    timerEndTime?: boolean
    isPaused?: boolean
    isActive?: boolean
    isSet?: boolean
    isRunning?: boolean
    isStopped?: boolean
    isReset?: boolean
    isStarted?: boolean
    isFinished?: boolean
    isCompleted?: boolean
  }, ExtArgs["result"]["timer"]>



  export type TimerSelectScalar = {
    id?: boolean
    timerName?: boolean
    currentTime?: boolean
    timerId?: boolean
    timerEventList?: boolean
    timerTriggerList?: boolean
    timerStartDate?: boolean
    timerStartTime?: boolean
    timerEndDate?: boolean
    timerEndTime?: boolean
    isPaused?: boolean
    isActive?: boolean
    isSet?: boolean
    isRunning?: boolean
    isStopped?: boolean
    isReset?: boolean
    isStarted?: boolean
    isFinished?: boolean
    isCompleted?: boolean
  }

  export type TimerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timerName" | "currentTime" | "timerId" | "timerEventList" | "timerTriggerList" | "timerStartDate" | "timerStartTime" | "timerEndDate" | "timerEndTime" | "isPaused" | "isActive" | "isSet" | "isRunning" | "isStopped" | "isReset" | "isStarted" | "isFinished" | "isCompleted", ExtArgs["result"]["timer"]>

  export type $TimerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Timer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timerName: string
      currentTime: number
      timerId: string
      timerEventList: string[]
      timerTriggerList: string[]
      timerStartDate: string
      timerStartTime: string
      timerEndDate: string
      timerEndTime: string
      isPaused: boolean
      isActive: boolean
      isSet: boolean
      isRunning: boolean
      isStopped: boolean
      isReset: boolean
      isStarted: boolean
      isFinished: boolean
      isCompleted: boolean
    }, ExtArgs["result"]["timer"]>
    composites: {}
  }

  type TimerGetPayload<S extends boolean | null | undefined | TimerDefaultArgs> = $Result.GetResult<Prisma.$TimerPayload, S>

  type TimerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimerCountAggregateInputType | true
    }

  export interface TimerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Timer'], meta: { name: 'Timer' } }
    /**
     * Find zero or one Timer that matches the filter.
     * @param {TimerFindUniqueArgs} args - Arguments to find a Timer
     * @example
     * // Get one Timer
     * const timer = await prisma.timer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimerFindUniqueArgs>(args: SelectSubset<T, TimerFindUniqueArgs<ExtArgs>>): Prisma__TimerClient<$Result.GetResult<Prisma.$TimerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Timer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimerFindUniqueOrThrowArgs} args - Arguments to find a Timer
     * @example
     * // Get one Timer
     * const timer = await prisma.timer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimerFindUniqueOrThrowArgs>(args: SelectSubset<T, TimerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimerClient<$Result.GetResult<Prisma.$TimerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Timer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerFindFirstArgs} args - Arguments to find a Timer
     * @example
     * // Get one Timer
     * const timer = await prisma.timer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimerFindFirstArgs>(args?: SelectSubset<T, TimerFindFirstArgs<ExtArgs>>): Prisma__TimerClient<$Result.GetResult<Prisma.$TimerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Timer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerFindFirstOrThrowArgs} args - Arguments to find a Timer
     * @example
     * // Get one Timer
     * const timer = await prisma.timer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimerFindFirstOrThrowArgs>(args?: SelectSubset<T, TimerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimerClient<$Result.GetResult<Prisma.$TimerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Timers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Timers
     * const timers = await prisma.timer.findMany()
     * 
     * // Get first 10 Timers
     * const timers = await prisma.timer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timerWithIdOnly = await prisma.timer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimerFindManyArgs>(args?: SelectSubset<T, TimerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Timer.
     * @param {TimerCreateArgs} args - Arguments to create a Timer.
     * @example
     * // Create one Timer
     * const Timer = await prisma.timer.create({
     *   data: {
     *     // ... data to create a Timer
     *   }
     * })
     * 
     */
    create<T extends TimerCreateArgs>(args: SelectSubset<T, TimerCreateArgs<ExtArgs>>): Prisma__TimerClient<$Result.GetResult<Prisma.$TimerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Timers.
     * @param {TimerCreateManyArgs} args - Arguments to create many Timers.
     * @example
     * // Create many Timers
     * const timer = await prisma.timer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimerCreateManyArgs>(args?: SelectSubset<T, TimerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Timer.
     * @param {TimerDeleteArgs} args - Arguments to delete one Timer.
     * @example
     * // Delete one Timer
     * const Timer = await prisma.timer.delete({
     *   where: {
     *     // ... filter to delete one Timer
     *   }
     * })
     * 
     */
    delete<T extends TimerDeleteArgs>(args: SelectSubset<T, TimerDeleteArgs<ExtArgs>>): Prisma__TimerClient<$Result.GetResult<Prisma.$TimerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Timer.
     * @param {TimerUpdateArgs} args - Arguments to update one Timer.
     * @example
     * // Update one Timer
     * const timer = await prisma.timer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimerUpdateArgs>(args: SelectSubset<T, TimerUpdateArgs<ExtArgs>>): Prisma__TimerClient<$Result.GetResult<Prisma.$TimerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Timers.
     * @param {TimerDeleteManyArgs} args - Arguments to filter Timers to delete.
     * @example
     * // Delete a few Timers
     * const { count } = await prisma.timer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimerDeleteManyArgs>(args?: SelectSubset<T, TimerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Timers
     * const timer = await prisma.timer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimerUpdateManyArgs>(args: SelectSubset<T, TimerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Timer.
     * @param {TimerUpsertArgs} args - Arguments to update or create a Timer.
     * @example
     * // Update or create a Timer
     * const timer = await prisma.timer.upsert({
     *   create: {
     *     // ... data to create a Timer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Timer we want to update
     *   }
     * })
     */
    upsert<T extends TimerUpsertArgs>(args: SelectSubset<T, TimerUpsertArgs<ExtArgs>>): Prisma__TimerClient<$Result.GetResult<Prisma.$TimerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Timers that matches the filter.
     * @param {TimerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const timer = await prisma.timer.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TimerFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Timer.
     * @param {TimerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const timer = await prisma.timer.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TimerAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Timers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerCountArgs} args - Arguments to filter Timers to count.
     * @example
     * // Count the number of Timers
     * const count = await prisma.timer.count({
     *   where: {
     *     // ... the filter for the Timers we want to count
     *   }
     * })
    **/
    count<T extends TimerCountArgs>(
      args?: Subset<T, TimerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Timer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimerAggregateArgs>(args: Subset<T, TimerAggregateArgs>): Prisma.PrismaPromise<GetTimerAggregateType<T>>

    /**
     * Group by Timer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimerGroupByArgs} args - Group by arguments.
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
      T extends TimerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimerGroupByArgs['orderBy'] }
        : { orderBy?: TimerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Timer model
   */
  readonly fields: TimerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Timer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Timer model
   */
  interface TimerFieldRefs {
    readonly id: FieldRef<"Timer", 'String'>
    readonly timerName: FieldRef<"Timer", 'String'>
    readonly currentTime: FieldRef<"Timer", 'Int'>
    readonly timerId: FieldRef<"Timer", 'String'>
    readonly timerEventList: FieldRef<"Timer", 'String[]'>
    readonly timerTriggerList: FieldRef<"Timer", 'String[]'>
    readonly timerStartDate: FieldRef<"Timer", 'String'>
    readonly timerStartTime: FieldRef<"Timer", 'String'>
    readonly timerEndDate: FieldRef<"Timer", 'String'>
    readonly timerEndTime: FieldRef<"Timer", 'String'>
    readonly isPaused: FieldRef<"Timer", 'Boolean'>
    readonly isActive: FieldRef<"Timer", 'Boolean'>
    readonly isSet: FieldRef<"Timer", 'Boolean'>
    readonly isRunning: FieldRef<"Timer", 'Boolean'>
    readonly isStopped: FieldRef<"Timer", 'Boolean'>
    readonly isReset: FieldRef<"Timer", 'Boolean'>
    readonly isStarted: FieldRef<"Timer", 'Boolean'>
    readonly isFinished: FieldRef<"Timer", 'Boolean'>
    readonly isCompleted: FieldRef<"Timer", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Timer findUnique
   */
  export type TimerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timer
     */
    select?: TimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timer
     */
    omit?: TimerOmit<ExtArgs> | null
    /**
     * Filter, which Timer to fetch.
     */
    where: TimerWhereUniqueInput
  }

  /**
   * Timer findUniqueOrThrow
   */
  export type TimerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timer
     */
    select?: TimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timer
     */
    omit?: TimerOmit<ExtArgs> | null
    /**
     * Filter, which Timer to fetch.
     */
    where: TimerWhereUniqueInput
  }

  /**
   * Timer findFirst
   */
  export type TimerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timer
     */
    select?: TimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timer
     */
    omit?: TimerOmit<ExtArgs> | null
    /**
     * Filter, which Timer to fetch.
     */
    where?: TimerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timers to fetch.
     */
    orderBy?: TimerOrderByWithRelationInput | TimerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timers.
     */
    cursor?: TimerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timers.
     */
    distinct?: TimerScalarFieldEnum | TimerScalarFieldEnum[]
  }

  /**
   * Timer findFirstOrThrow
   */
  export type TimerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timer
     */
    select?: TimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timer
     */
    omit?: TimerOmit<ExtArgs> | null
    /**
     * Filter, which Timer to fetch.
     */
    where?: TimerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timers to fetch.
     */
    orderBy?: TimerOrderByWithRelationInput | TimerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timers.
     */
    cursor?: TimerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timers.
     */
    distinct?: TimerScalarFieldEnum | TimerScalarFieldEnum[]
  }

  /**
   * Timer findMany
   */
  export type TimerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timer
     */
    select?: TimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timer
     */
    omit?: TimerOmit<ExtArgs> | null
    /**
     * Filter, which Timers to fetch.
     */
    where?: TimerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timers to fetch.
     */
    orderBy?: TimerOrderByWithRelationInput | TimerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Timers.
     */
    cursor?: TimerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timers.
     */
    skip?: number
    distinct?: TimerScalarFieldEnum | TimerScalarFieldEnum[]
  }

  /**
   * Timer create
   */
  export type TimerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timer
     */
    select?: TimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timer
     */
    omit?: TimerOmit<ExtArgs> | null
    /**
     * The data needed to create a Timer.
     */
    data: XOR<TimerCreateInput, TimerUncheckedCreateInput>
  }

  /**
   * Timer createMany
   */
  export type TimerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Timers.
     */
    data: TimerCreateManyInput | TimerCreateManyInput[]
  }

  /**
   * Timer update
   */
  export type TimerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timer
     */
    select?: TimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timer
     */
    omit?: TimerOmit<ExtArgs> | null
    /**
     * The data needed to update a Timer.
     */
    data: XOR<TimerUpdateInput, TimerUncheckedUpdateInput>
    /**
     * Choose, which Timer to update.
     */
    where: TimerWhereUniqueInput
  }

  /**
   * Timer updateMany
   */
  export type TimerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Timers.
     */
    data: XOR<TimerUpdateManyMutationInput, TimerUncheckedUpdateManyInput>
    /**
     * Filter which Timers to update
     */
    where?: TimerWhereInput
    /**
     * Limit how many Timers to update.
     */
    limit?: number
  }

  /**
   * Timer upsert
   */
  export type TimerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timer
     */
    select?: TimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timer
     */
    omit?: TimerOmit<ExtArgs> | null
    /**
     * The filter to search for the Timer to update in case it exists.
     */
    where: TimerWhereUniqueInput
    /**
     * In case the Timer found by the `where` argument doesn't exist, create a new Timer with this data.
     */
    create: XOR<TimerCreateInput, TimerUncheckedCreateInput>
    /**
     * In case the Timer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimerUpdateInput, TimerUncheckedUpdateInput>
  }

  /**
   * Timer delete
   */
  export type TimerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timer
     */
    select?: TimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timer
     */
    omit?: TimerOmit<ExtArgs> | null
    /**
     * Filter which Timer to delete.
     */
    where: TimerWhereUniqueInput
  }

  /**
   * Timer deleteMany
   */
  export type TimerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timers to delete
     */
    where?: TimerWhereInput
    /**
     * Limit how many Timers to delete.
     */
    limit?: number
  }

  /**
   * Timer findRaw
   */
  export type TimerFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Timer aggregateRaw
   */
  export type TimerAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Timer without action
   */
  export type TimerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timer
     */
    select?: TimerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timer
     */
    omit?: TimerOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TimerScalarFieldEnum: {
    id: 'id',
    timerName: 'timerName',
    currentTime: 'currentTime',
    timerId: 'timerId',
    timerEventList: 'timerEventList',
    timerTriggerList: 'timerTriggerList',
    timerStartDate: 'timerStartDate',
    timerStartTime: 'timerStartTime',
    timerEndDate: 'timerEndDate',
    timerEndTime: 'timerEndTime',
    isPaused: 'isPaused',
    isActive: 'isActive',
    isSet: 'isSet',
    isRunning: 'isRunning',
    isStopped: 'isStopped',
    isReset: 'isReset',
    isStarted: 'isStarted',
    isFinished: 'isFinished',
    isCompleted: 'isCompleted'
  };

  export type TimerScalarFieldEnum = (typeof TimerScalarFieldEnum)[keyof typeof TimerScalarFieldEnum]


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


  export type TimerWhereInput = {
    AND?: TimerWhereInput | TimerWhereInput[]
    OR?: TimerWhereInput[]
    NOT?: TimerWhereInput | TimerWhereInput[]
    id?: StringFilter<"Timer"> | string
    timerName?: StringFilter<"Timer"> | string
    currentTime?: IntFilter<"Timer"> | number
    timerId?: StringFilter<"Timer"> | string
    timerEventList?: StringNullableListFilter<"Timer">
    timerTriggerList?: StringNullableListFilter<"Timer">
    timerStartDate?: StringFilter<"Timer"> | string
    timerStartTime?: StringFilter<"Timer"> | string
    timerEndDate?: StringFilter<"Timer"> | string
    timerEndTime?: StringFilter<"Timer"> | string
    isPaused?: BoolFilter<"Timer"> | boolean
    isActive?: BoolFilter<"Timer"> | boolean
    isSet?: BoolFilter<"Timer"> | boolean
    isRunning?: BoolFilter<"Timer"> | boolean
    isStopped?: BoolFilter<"Timer"> | boolean
    isReset?: BoolFilter<"Timer"> | boolean
    isStarted?: BoolFilter<"Timer"> | boolean
    isFinished?: BoolFilter<"Timer"> | boolean
    isCompleted?: BoolFilter<"Timer"> | boolean
  }

  export type TimerOrderByWithRelationInput = {
    id?: SortOrder
    timerName?: SortOrder
    currentTime?: SortOrder
    timerId?: SortOrder
    timerEventList?: SortOrder
    timerTriggerList?: SortOrder
    timerStartDate?: SortOrder
    timerStartTime?: SortOrder
    timerEndDate?: SortOrder
    timerEndTime?: SortOrder
    isPaused?: SortOrder
    isActive?: SortOrder
    isSet?: SortOrder
    isRunning?: SortOrder
    isStopped?: SortOrder
    isReset?: SortOrder
    isStarted?: SortOrder
    isFinished?: SortOrder
    isCompleted?: SortOrder
  }

  export type TimerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimerWhereInput | TimerWhereInput[]
    OR?: TimerWhereInput[]
    NOT?: TimerWhereInput | TimerWhereInput[]
    timerName?: StringFilter<"Timer"> | string
    currentTime?: IntFilter<"Timer"> | number
    timerId?: StringFilter<"Timer"> | string
    timerEventList?: StringNullableListFilter<"Timer">
    timerTriggerList?: StringNullableListFilter<"Timer">
    timerStartDate?: StringFilter<"Timer"> | string
    timerStartTime?: StringFilter<"Timer"> | string
    timerEndDate?: StringFilter<"Timer"> | string
    timerEndTime?: StringFilter<"Timer"> | string
    isPaused?: BoolFilter<"Timer"> | boolean
    isActive?: BoolFilter<"Timer"> | boolean
    isSet?: BoolFilter<"Timer"> | boolean
    isRunning?: BoolFilter<"Timer"> | boolean
    isStopped?: BoolFilter<"Timer"> | boolean
    isReset?: BoolFilter<"Timer"> | boolean
    isStarted?: BoolFilter<"Timer"> | boolean
    isFinished?: BoolFilter<"Timer"> | boolean
    isCompleted?: BoolFilter<"Timer"> | boolean
  }, "id">

  export type TimerOrderByWithAggregationInput = {
    id?: SortOrder
    timerName?: SortOrder
    currentTime?: SortOrder
    timerId?: SortOrder
    timerEventList?: SortOrder
    timerTriggerList?: SortOrder
    timerStartDate?: SortOrder
    timerStartTime?: SortOrder
    timerEndDate?: SortOrder
    timerEndTime?: SortOrder
    isPaused?: SortOrder
    isActive?: SortOrder
    isSet?: SortOrder
    isRunning?: SortOrder
    isStopped?: SortOrder
    isReset?: SortOrder
    isStarted?: SortOrder
    isFinished?: SortOrder
    isCompleted?: SortOrder
    _count?: TimerCountOrderByAggregateInput
    _avg?: TimerAvgOrderByAggregateInput
    _max?: TimerMaxOrderByAggregateInput
    _min?: TimerMinOrderByAggregateInput
    _sum?: TimerSumOrderByAggregateInput
  }

  export type TimerScalarWhereWithAggregatesInput = {
    AND?: TimerScalarWhereWithAggregatesInput | TimerScalarWhereWithAggregatesInput[]
    OR?: TimerScalarWhereWithAggregatesInput[]
    NOT?: TimerScalarWhereWithAggregatesInput | TimerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Timer"> | string
    timerName?: StringWithAggregatesFilter<"Timer"> | string
    currentTime?: IntWithAggregatesFilter<"Timer"> | number
    timerId?: StringWithAggregatesFilter<"Timer"> | string
    timerEventList?: StringNullableListFilter<"Timer">
    timerTriggerList?: StringNullableListFilter<"Timer">
    timerStartDate?: StringWithAggregatesFilter<"Timer"> | string
    timerStartTime?: StringWithAggregatesFilter<"Timer"> | string
    timerEndDate?: StringWithAggregatesFilter<"Timer"> | string
    timerEndTime?: StringWithAggregatesFilter<"Timer"> | string
    isPaused?: BoolWithAggregatesFilter<"Timer"> | boolean
    isActive?: BoolWithAggregatesFilter<"Timer"> | boolean
    isSet?: BoolWithAggregatesFilter<"Timer"> | boolean
    isRunning?: BoolWithAggregatesFilter<"Timer"> | boolean
    isStopped?: BoolWithAggregatesFilter<"Timer"> | boolean
    isReset?: BoolWithAggregatesFilter<"Timer"> | boolean
    isStarted?: BoolWithAggregatesFilter<"Timer"> | boolean
    isFinished?: BoolWithAggregatesFilter<"Timer"> | boolean
    isCompleted?: BoolWithAggregatesFilter<"Timer"> | boolean
  }

  export type TimerCreateInput = {
    id?: string
    timerName: string
    currentTime: number
    timerId: string
    timerEventList?: TimerCreatetimerEventListInput | string[]
    timerTriggerList?: TimerCreatetimerTriggerListInput | string[]
    timerStartDate: string
    timerStartTime: string
    timerEndDate: string
    timerEndTime: string
    isPaused: boolean
    isActive: boolean
    isSet: boolean
    isRunning: boolean
    isStopped: boolean
    isReset: boolean
    isStarted: boolean
    isFinished: boolean
    isCompleted: boolean
  }

  export type TimerUncheckedCreateInput = {
    id?: string
    timerName: string
    currentTime: number
    timerId: string
    timerEventList?: TimerCreatetimerEventListInput | string[]
    timerTriggerList?: TimerCreatetimerTriggerListInput | string[]
    timerStartDate: string
    timerStartTime: string
    timerEndDate: string
    timerEndTime: string
    isPaused: boolean
    isActive: boolean
    isSet: boolean
    isRunning: boolean
    isStopped: boolean
    isReset: boolean
    isStarted: boolean
    isFinished: boolean
    isCompleted: boolean
  }

  export type TimerUpdateInput = {
    timerName?: StringFieldUpdateOperationsInput | string
    currentTime?: IntFieldUpdateOperationsInput | number
    timerId?: StringFieldUpdateOperationsInput | string
    timerEventList?: TimerUpdatetimerEventListInput | string[]
    timerTriggerList?: TimerUpdatetimerTriggerListInput | string[]
    timerStartDate?: StringFieldUpdateOperationsInput | string
    timerStartTime?: StringFieldUpdateOperationsInput | string
    timerEndDate?: StringFieldUpdateOperationsInput | string
    timerEndTime?: StringFieldUpdateOperationsInput | string
    isPaused?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSet?: BoolFieldUpdateOperationsInput | boolean
    isRunning?: BoolFieldUpdateOperationsInput | boolean
    isStopped?: BoolFieldUpdateOperationsInput | boolean
    isReset?: BoolFieldUpdateOperationsInput | boolean
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isFinished?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TimerUncheckedUpdateInput = {
    timerName?: StringFieldUpdateOperationsInput | string
    currentTime?: IntFieldUpdateOperationsInput | number
    timerId?: StringFieldUpdateOperationsInput | string
    timerEventList?: TimerUpdatetimerEventListInput | string[]
    timerTriggerList?: TimerUpdatetimerTriggerListInput | string[]
    timerStartDate?: StringFieldUpdateOperationsInput | string
    timerStartTime?: StringFieldUpdateOperationsInput | string
    timerEndDate?: StringFieldUpdateOperationsInput | string
    timerEndTime?: StringFieldUpdateOperationsInput | string
    isPaused?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSet?: BoolFieldUpdateOperationsInput | boolean
    isRunning?: BoolFieldUpdateOperationsInput | boolean
    isStopped?: BoolFieldUpdateOperationsInput | boolean
    isReset?: BoolFieldUpdateOperationsInput | boolean
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isFinished?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TimerCreateManyInput = {
    id?: string
    timerName: string
    currentTime: number
    timerId: string
    timerEventList?: TimerCreatetimerEventListInput | string[]
    timerTriggerList?: TimerCreatetimerTriggerListInput | string[]
    timerStartDate: string
    timerStartTime: string
    timerEndDate: string
    timerEndTime: string
    isPaused: boolean
    isActive: boolean
    isSet: boolean
    isRunning: boolean
    isStopped: boolean
    isReset: boolean
    isStarted: boolean
    isFinished: boolean
    isCompleted: boolean
  }

  export type TimerUpdateManyMutationInput = {
    timerName?: StringFieldUpdateOperationsInput | string
    currentTime?: IntFieldUpdateOperationsInput | number
    timerId?: StringFieldUpdateOperationsInput | string
    timerEventList?: TimerUpdatetimerEventListInput | string[]
    timerTriggerList?: TimerUpdatetimerTriggerListInput | string[]
    timerStartDate?: StringFieldUpdateOperationsInput | string
    timerStartTime?: StringFieldUpdateOperationsInput | string
    timerEndDate?: StringFieldUpdateOperationsInput | string
    timerEndTime?: StringFieldUpdateOperationsInput | string
    isPaused?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSet?: BoolFieldUpdateOperationsInput | boolean
    isRunning?: BoolFieldUpdateOperationsInput | boolean
    isStopped?: BoolFieldUpdateOperationsInput | boolean
    isReset?: BoolFieldUpdateOperationsInput | boolean
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isFinished?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TimerUncheckedUpdateManyInput = {
    timerName?: StringFieldUpdateOperationsInput | string
    currentTime?: IntFieldUpdateOperationsInput | number
    timerId?: StringFieldUpdateOperationsInput | string
    timerEventList?: TimerUpdatetimerEventListInput | string[]
    timerTriggerList?: TimerUpdatetimerTriggerListInput | string[]
    timerStartDate?: StringFieldUpdateOperationsInput | string
    timerStartTime?: StringFieldUpdateOperationsInput | string
    timerEndDate?: StringFieldUpdateOperationsInput | string
    timerEndTime?: StringFieldUpdateOperationsInput | string
    isPaused?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSet?: BoolFieldUpdateOperationsInput | boolean
    isRunning?: BoolFieldUpdateOperationsInput | boolean
    isStopped?: BoolFieldUpdateOperationsInput | boolean
    isReset?: BoolFieldUpdateOperationsInput | boolean
    isStarted?: BoolFieldUpdateOperationsInput | boolean
    isFinished?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TimerCountOrderByAggregateInput = {
    id?: SortOrder
    timerName?: SortOrder
    currentTime?: SortOrder
    timerId?: SortOrder
    timerEventList?: SortOrder
    timerTriggerList?: SortOrder
    timerStartDate?: SortOrder
    timerStartTime?: SortOrder
    timerEndDate?: SortOrder
    timerEndTime?: SortOrder
    isPaused?: SortOrder
    isActive?: SortOrder
    isSet?: SortOrder
    isRunning?: SortOrder
    isStopped?: SortOrder
    isReset?: SortOrder
    isStarted?: SortOrder
    isFinished?: SortOrder
    isCompleted?: SortOrder
  }

  export type TimerAvgOrderByAggregateInput = {
    currentTime?: SortOrder
  }

  export type TimerMaxOrderByAggregateInput = {
    id?: SortOrder
    timerName?: SortOrder
    currentTime?: SortOrder
    timerId?: SortOrder
    timerStartDate?: SortOrder
    timerStartTime?: SortOrder
    timerEndDate?: SortOrder
    timerEndTime?: SortOrder
    isPaused?: SortOrder
    isActive?: SortOrder
    isSet?: SortOrder
    isRunning?: SortOrder
    isStopped?: SortOrder
    isReset?: SortOrder
    isStarted?: SortOrder
    isFinished?: SortOrder
    isCompleted?: SortOrder
  }

  export type TimerMinOrderByAggregateInput = {
    id?: SortOrder
    timerName?: SortOrder
    currentTime?: SortOrder
    timerId?: SortOrder
    timerStartDate?: SortOrder
    timerStartTime?: SortOrder
    timerEndDate?: SortOrder
    timerEndTime?: SortOrder
    isPaused?: SortOrder
    isActive?: SortOrder
    isSet?: SortOrder
    isRunning?: SortOrder
    isStopped?: SortOrder
    isReset?: SortOrder
    isStarted?: SortOrder
    isFinished?: SortOrder
    isCompleted?: SortOrder
  }

  export type TimerSumOrderByAggregateInput = {
    currentTime?: SortOrder
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

  export type TimerCreatetimerEventListInput = {
    set: string[]
  }

  export type TimerCreatetimerTriggerListInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TimerUpdatetimerEventListInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TimerUpdatetimerTriggerListInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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