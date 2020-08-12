  // Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license

// tslint:disable:max-line-length

import {
  IIconOptions,
  IIconSubset,
  registerIcons
} from '@uifabric/styling';

export function initializeIcons(
  baseUrl: string = '',
  options?: IIconOptions
): void {
  const subset: IIconSubset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons"`,
      src: `url('${baseUrl}fabric-icons-3f43a6ac.woff') format('woff')`
    },
    icons: {
      'Flow': '\uEF90',
      'ExcelDocument': '\uEF73',
      'SyncToPC': '\uEE6E',
      'CalculatorAddition': '\uE948',
      'Upload': '\uE898',
      'OpenFile': '\uE8E5',
      'ExcelLogo16': '\uF397',
      'FabricFolder': '\uF0A9',
      'ChevronDown': '\uE70D'
    }
  };

  registerIcons(subset, options);
}
