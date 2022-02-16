declare module "multi-clamp" {
  interface MultiClampOptions {
    ellipsis?: string | Element;
    clamp?: number | 'auto';
    reverse?: boolean;
    splitByWords?: boolean;
    disableCssClamp?: boolean;
    onClampStart?: ({ needClamp }: { needClamp: boolean }) => void | false;
    onClampEnd?: ({ didClamp }: { didClamp: boolean }) => void;
  }
  export default class MultiClamp {
    constructor(element: any, options: MultiClampOptions);
    reload(options: MultiClampOptions): void;
  }
}
