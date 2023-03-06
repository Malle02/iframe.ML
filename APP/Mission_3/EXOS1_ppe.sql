#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: Type
#------------------------------------------------------------

CREATE TABLE Type(
        Id_type Int NOT NULL ,
        libelle Varchar (50) NOT NULL
	,CONSTRAINT Type_PK PRIMARY KEY (Id_type)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: categorie
#------------------------------------------------------------

CREATE TABLE categorie(
        Id_categorie Int NOT NULL ,
        Libelle      Varchar (50) NOT NULL
	,CONSTRAINT categorie_PK PRIMARY KEY (Id_categorie)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Client
#------------------------------------------------------------

CREATE TABLE Client(
        id_client   Int NOT NULL ,
        Nom         Varchar (50) NOT NULL ,
        Adresse     Varchar (50) NOT NULL ,
        code_postal Int NOT NULL ,
        ville       Varchar (50) NOT NULL
	,CONSTRAINT Client_PK PRIMARY KEY (id_client)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Pays
#------------------------------------------------------------

CREATE TABLE Pays(
        Id_pays             Int NOT NULL ,
        Nom                 Varchar (50) NOT NULL ,
        nomnbre_d_habitant  Int NOT NULL ,
        superficie          Varchar (50) NOT NULL
	,CONSTRAINT Pays_PK PRIMARY KEY (Id_pays)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Agence 
#------------------------------------------------------------

CREATE TABLE Agence(
        id_Agence   Int NOT NULL ,
        Nom         Varchar (50) NOT NULL ,
        Nb_employes Int NOT NULL ,
        Id_pays     Int NOT NULL
	,CONSTRAINT Agence_PK PRIMARY KEY (id_Agence)

	,CONSTRAINT Agence_Pays_FK FOREIGN KEY (Id_pays) REFERENCES Pays(Id_pays)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Modele
#------------------------------------------------------------

CREATE TABLE Modele(
        Id_modele     Int NOT NULL ,
        Denomination  Varchar (50) NOT NULL ,
        Puissance     Varchar (50) NOT NULL
	,CONSTRAINT Modele_PK PRIMARY KEY (Id_modele)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Marque
#------------------------------------------------------------

CREATE TABLE Marque(
        id_marque Int NOT NULL ,
        Nom       Varchar (50) NOT NULL
	,CONSTRAINT Marque_PK PRIMARY KEY (id_marque)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Vehicule
#------------------------------------------------------------

CREATE TABLE Vehicule(
        id_vehicule     Int NOT NULL ,
        immatriculation Varchar (50) NOT NULL ,
        Age             Int NOT NULL ,
        Etat            Varchar (50) NOT NULL ,
        Id_categorie    Int NOT NULL ,
        Id_modele       Int NOT NULL ,
        id_Agence       Int NOT NULL ,
        Id_type         Int NOT NULL ,
        id_marque       Int NOT NULL
	,CONSTRAINT Vehicule_PK PRIMARY KEY (id_vehicule)

	,CONSTRAINT Vehicule_categorie_FK FOREIGN KEY (Id_categorie) REFERENCES categorie(Id_categorie)
	,CONSTRAINT Vehicule_Modele0_FK FOREIGN KEY (Id_modele) REFERENCES Modele(Id_modele)
	,CONSTRAINT Vehicule_Agence1_FK FOREIGN KEY (id_Agence) REFERENCES Agence(id_Agence)
	,CONSTRAINT Vehicule_Type2_FK FOREIGN KEY (Id_type) REFERENCES Type(Id_type)
	,CONSTRAINT Vehicule_Marque3_FK FOREIGN KEY (id_marque) REFERENCES Marque(id_marque)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: a_louer
#------------------------------------------------------------

CREATE TABLE a_louer(
        id_vehicule     Int NOT NULL ,
        id_client       Int NOT NULL ,
        date_de_retrait Date NOT NULL ,
        date_de_retour  Date NOT NULL
	,CONSTRAINT a_louer_PK PRIMARY KEY (id_vehicule,id_client)

	,CONSTRAINT a_louer_Vehicule_FK FOREIGN KEY (id_vehicule) REFERENCES Vehicule(id_vehicule)
	,CONSTRAINT a_louer_Client0_FK FOREIGN KEY (id_client) REFERENCES Client(id_client)
)ENGINE=InnoDB;

