import {HttpInterceptorFn} from '@angular/common/http';
import {API_URL} from '../utils/constants';

export const baseInterceptor: HttpInterceptorFn = (req, next) => {
  const reqClone = req.clone({
    url: `${API_URL}/${req.url}`,
  });

  return next(reqClone);
};
