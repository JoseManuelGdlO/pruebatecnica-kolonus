import { Injectable } from "@angular/core";
import { CLASIFICATION_STORAGE_KEY } from "src/app/shared/utils/reservate-strings";
import { StorageService } from "src/app/shared/utils/storage.service";

@Injectable({
    providedIn: 'root'
  })
  export class ClasificationService {
    clasifications: string[] = [];
  
    constructor(
        private storageService: StorageService
    ) {
      this.obtenerClasificacionesGuardadas();
    }
  
    async obtenerClasificacionesGuardadas() {
      const value = await this.storageService.load(CLASIFICATION_STORAGE_KEY) || [];
      if (value.length > 0) {
        this.clasifications = value;
      }
    }
  
    async saveClasifications() {
      await this.storageService.save(CLASIFICATION_STORAGE_KEY, this.clasifications);
    }
  
    async addClasifications(clasificacion: string) {
      this.clasifications.push(clasificacion);
      await this.saveClasifications();
    }
  }