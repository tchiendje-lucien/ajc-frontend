export class Pays {
  oid: number;
  name: string;
}

export class ActivitySectors {
  oid: number;
  name: string;
}

export class ErrorClass {
  message: string;
  status: boolean;
}

export class SuccessClass {
  message: string;
  status: boolean;
}

export class ResponseClass {
  message: string;
  status: boolean;
}

export const myConst = {
  url: "http://127.0.0.1:8080",
};
