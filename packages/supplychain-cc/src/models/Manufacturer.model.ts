import * as yup from 'yup';
import {
  ConvectorModel,
  Default,
  ReadOnly,
  Required,
  Validate,
  FlatConvectorModel
} from '@worldsibu/convector-core-model';

import {Salt} from './salt.model';

export class Manufacturer extends ConvectorModel<Manufacturer> {
  @ReadOnly()
  @Required()
  public readonly type:string = 'io.pharmachain.Manufacturer';

  public x509Identity: string;

  @Required()
  @Validate(yup.string())
  public address: string;

  @Required()
  @Validate(yup.string())
  public organizationName: string;

  @Required()
  @Validate(yup.string())
  public authorityNumber: string;

  @Required()
  @Validate(yup.string())
  public FDALicenseNumber: string;
  

  public rawMaterialAvailable: Array<FlatConvectorModel<Salt>>;

  public batchManufacturedCount: number = 0;


}